const {
  BadRequestError,
  AuthFailureError,
  NotFoundError,
} = require("../../core/error.response.js");
const emailExistence = require("email-existence");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  User,
  KeyToken,
  Profile,
  BlacklistToken,
} = require("../models/index.js");
const { ReasonPhrases, StatusCodes } = require("../../core/httpStatusCode");
const {
  generateId,
  validateMail,
  checkExpriedTranSaction,
} = require("../utils/contanst.js");
const removeEmpty = require("../utils/removeEmty.js");
const { where } = require("sequelize");
const sendMail = require("../utils/mail.js");

class AuthService {
  static handleLogin = async ({ email, password }) => {
    // find user by email
    const findUser = await User.findOne({
      where: { email },
      attributes: { exclude: ["pin", "provider_id", "limit"] },
    });
    // check user by email
    if (!findUser) {
      throw new BadRequestError("Not found User!");
    }
    // validate password
    const match = await bcrypt.compare(password, findUser.password);
    if (!match) {
      throw new BadRequestError("Email or password Incorrect");
    }
    // create token
    const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH } = process.env;
    const accessToken = jwt.sign({ userId: findUser.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
    const refreshToken = jwt.sign(
      { data: new Date().getTime() + Math.random() },
      JWT_SECRET,
      {
        expiresIn: JWT_REFRESH,
      }
    );
    // update token to database
    await KeyToken.findOrCreate({
      where: { refresh_token: refreshToken },
      defaults: {
        id: generateId(),
        user_id: findUser.id,
        refresh_token: refreshToken,
      },
    });
    // check user have subscriptions
    if (!findUser?.subscriptions_id) {
      return {
        accessToken,
        refreshToken,
        account: {
          id: findUser.id,
          namme: findUser.name,
          email: findUser.email,
        },
        message: "user chưa có gói xem phim",
      };
    }
    return {
      accessToken,
      refreshToken,
      account: {
        id: findUser.id,
        namme: findUser.name,
        email: findUser.email,
        subscriptions: findUser.subscriptions_id,
      },
    };
  };
  static handleGetAllProfile = async ({ id }) => {
    const user = await User.findOne({
      where: { id: id },
      include: [
        {
          model: Profile,
          as: "profiles",
        },
      ],
    });
    if (!user) {
      throw new BadRequestError("Not found User!");
    }
    return user;
  };
  static handleSignup = async ({ email, password }) => {
    const findUser = await User.findOne({
      where: { email },
    });
    if (findUser) {
      throw new BadRequestError("User đã tồn tại");
    }
    const passhash = bcrypt.hashSync(password, 10);
    const idUser = generateId();
    await User.create({
      id: idUser,
      password: passhash,
      provider_id: "email",
      name: email.split("@")[0],
      email: email,
    });
    const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH } = process.env;
    const accessToken = jwt.sign({ userId: idUser }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
    const refreshToken = jwt.sign(
      { data: new Date().getTime() + Math.random() },
      JWT_SECRET,
      {
        expiresIn: JWT_REFRESH,
      }
    );
    await KeyToken.findOrCreate({
      where: { refresh_token: refreshToken },
      defaults: {
        id: generateId(),
        user_id: idUser,
        refresh_token: refreshToken,
      },
    });
    return {
      accessToken,
      refreshToken,
    };
  };

  static handleChangeInfo = async (dataRequest, body) => {
    const { id } = dataRequest;
    const foundUser = await User.findByPk(id);
    if (!foundUser) throw new BadRequestError("Not found User!");
    // if (data?.password && data?.oldPassword) {
    //   const match = await bcrypt.compare(data.oldPassword, foundUser.password);
    //   if (!match) throw new AuthFailureError("Authentication Error");
    //   const hashPassword = bcrypt.hashSync(data.password, 10);
    //   objectUpdate.password = hashPassword;
    // }
    await foundUser.update(body);
  };
  static findUser = async (email) => {
    return await User.findOne({
      where: { email },
    });
  };
  static handleLogout = async (dataRequest, body) => {
    const { id, token, expired } = dataRequest;
    const { refreshToken } = body;
    if (!id || !refreshToken || !token) {
      throw new BadRequestError("bad request");
    }
    await BlacklistToken.findOrCreate({
      where: { token: token },
      defaults: {
        id: generateId(),
        token: token,
        expired,
      },
    });
    const keytoken = await KeyToken.findOne({
      where: {
        user_id: id,
        refresh_token: refreshToken,
      },
    });
    if (!keytoken) {
      throw new BadRequestError("không có keyToken");
    }
    await keytoken.destroy();
  };
  static HandlerefreshToken = async ({ refreshToken }) => {
    if (!refreshToken) {
      throw new BadRequestError("not found refreshToken");
    }
    const keytoken = await KeyToken.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!keytoken) {
      throw new NotFoundError("resToken not Exit");
    }
    const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH } = process.env;
    const newAccessToken = jwt.sign({ userId: keytoken.user_id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
    const newRefreshToken = jwt.sign(
      { data: new Date().getTime() + Math.random() },
      JWT_SECRET,
      {
        expiresIn: JWT_REFRESH,
      }
    );
    await keytoken.update(
      {
        refresh_token: newRefreshToken,
      },
      {
        where: {
          user_id: keytoken.user_id,
        },
      }
    );
    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  };
  static handleCheckMail = async ({ email }) => {
    if (!email || !validateMail(email)) {
      throw new BadRequestError("Email không hợp lệ");
    }
    const checkEmailExistence = (email) => {
      return new Promise((resolve) => {
        emailExistence.check(email, (err, res) => {
          if (err || !res) {
            resolve(false); // Trả về false nếu có lỗi hoặc email không tồn tại
          } else {
            resolve(true); // Trả về true nếu email tồn tại
          }
        });
      });
    };

    // Gọi hàm và chờ kết quả
    const status = await checkEmailExistence(email);
    if (!status) {
      throw new BadRequestError("Email không tồn tại");
    }
    const useExit = await User.findOne({
      where: { email },
    });
    if (!useExit) {
      return {
        resultCode: 100,
        message: "email chưa đăng ký",
      };
    }

    if (!useExit?.subscriptions_id) {
      return {
        resultCode: 500,
        message: "user chưa đăng ký gói",
      };
    }

    // Sử dụng Promise để xử lý bất đồng bộ

    return {
      resultCode: 0,
      message: "user đă đăng ký gói",
    }; // Trả về true hoặc false
  };
  static handleDestroySub = async ({ id }) => {
    const userExit = await User.findByPk(id);
    if (!userExit) throw new BadRequestError("không tìm thấy user");
    await userExit.update(
      {
        subscriptions_id: null, // Dữ liệu muốn cập nhật
      },
      {
        where: {
          where: { id },
        },
      }
    );
  };
  static handleForgotPass = async ({ email }) => {
    const userExit = await User.findOne({
      where: { email },
    });
    if (!userExit) throw new BadRequestError("tài khoản không tồn tại");
    const newPass = generateId();
    sendMail(email, "Mật khẩu mới", newPass);
  };
}

module.exports = AuthService;
