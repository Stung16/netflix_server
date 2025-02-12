const {
  BadRequestError,
  AuthFailureError,
} = require("../../core/error.response.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  User,
  KeyToken,
  Movie,
  Genre,
  Season,
  Episode,
  Actor,
  ContentWarning,
  Tag,
  Transaction,
  DeviceInfos,
} = require("../models/index.js");

class UserService {
  static handlegetProfile = async ({ id }) => {
    const user = await User.findOne({
      where: { id: id },
      include: [
        {
          model: Transaction,
          as: "transactions",
        },
      ],
    });
    if (!user) throw new BadRequestError("Not found user!");
    return user;
  };
  static handleChangePass = async (reqUser, reqBody) => {
    const { confirm_password, new_password, current_password } = reqBody;
    const { id } = reqUser;
    if (new_password !== confirm_password)
      throw new BadRequestError("newPass not same passconfirm");
    const match = await bcrypt.compare(
      current_password,
      reqUser?.dataValues?.password
    );
    if (!match) throw new BadRequestError("Password not match");
    const passwordHash = await bcrypt.hash(new_password, 10);
    await User.update(
      {
        password: passwordHash,
      },
      { where: { id: id } }
    );
  };
  static handleGetDevices = async () => {
    const devices = await DeviceInfos.findAll();
    return devices;
  };
  static handleUpdateActive = async (reqUser, reqBody) => {
    const { device } = reqBody;
    const { id } = reqUser;
    if (!device) throw new BadRequestError("Missing device");
    const deviceExist = await DeviceInfos.findOne({
      where: { device_info: JSON.stringify(device) },
    });
    if (!deviceExist) {
      await DeviceInfos.create({
        user_id: id,
        device_info: JSON.stringify(device),
        lastActive: new Date(),
      });
    } else {
      await DeviceInfos.update(
        {
          lastActive: new Date(),
        },
        { where: { device_info: JSON.stringify(device) } }
      );
    }
  };
}

module.exports = UserService;
