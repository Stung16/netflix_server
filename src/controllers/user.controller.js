const { SuccessResponse } = require("../../core/success.response.js");
const UserService = require("../services/user.service.js");

class UserController {
  static profile = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await UserService.handlegetProfile(req?.user),
    }).send(res);
  };
  static changePass = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await UserService.handleChangePass(req.user, req.body),
    }).send(res);
  };
  static inforService = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await UserService.handleGetInforService(req.user),
    }).send(res);
  };
  static getDevices = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await UserService.handleGetDevices(),
    }).send(res);
  };
  static updateActive = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await UserService.handleUpdateActive(req.user, req.body),
    }).send(res);
  };
}

module.exports = UserController;
