const jwt = require("jsonwebtoken");
const { User, BlacklistToken, Transaction } = require("../models/index");
const { checkExpriedTranSaction } = require("../utils/contanst");

module.exports = async (req, res, next) => {
  const response = {};
  const token = req.get("Authorization")?.split(" ")[1];
  if (!token) {
    Object.assign(response, {
      status: 401,
      message: "Token not found!",
    });
  }
  try {
    const existToken = await BlacklistToken.findOne({ where: { token } });
    if (existToken) {
      return Object.assign(response, {
        status: 401,
        message: "Token in blacklist",
      });
    }
    const { JWT_SECRET } = process.env;
    const { userId, exp } = jwt.verify(token, JWT_SECRET);
    const currentTime = Math.floor(Date.now() / 1000);
    if (exp < currentTime) {
      return Object.assign(response, {
        status: 401,
        message: "Token expired!",
      });
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return Object.assign(response, {
        status: 404,
        message: "User not exist!",
      });
    }
    // const inforTransaction = await Transaction.findOne({
    //   where: { user_id: userId },
    //   order: [["created_at", "DESC"]],
    // });
    // if (inforTransaction) {
    //   const { created_at } = inforTransaction;

    //   // // Kiểm tra xem gói xem phim đã hết hạn chưa
    //   if (checkExpriedTranSaction(created_at)) {
    //     await User.update(
    //       {
    //         subscriptions_id: null, // Dữ liệu muốn cập nhật
    //       },
    //       {
    //         where: {
    //           where: { id: findUser.id },
    //         },
    //       }
    //     );
    //   }
    // }

    req.user = {
      ...user,
      token,
      expired: new Date(exp * 1000),
      id: user?.id,
    };

    return next();
  } catch (e) {
    Object.assign(response, {
      status: 401,
      message: "Unauthorized",
    });
  }
  return res.status(response.status).json(response);
};
