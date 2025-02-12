const { SuccessResponse } = require("../../core/success.response.js");
const AuthService = require("../services/auth.service.js");

class AuthController {
  static login = async (req, res, next) => {
    new SuccessResponse({
      message: "Login Success!",
      data: await AuthService.handleLogin(req.body),
    }).send(res);
  };
  static getAllProfile = async (req, res) => {
    new SuccessResponse({
      message: "Login Success!",
      data: await AuthService.handleGetAllProfile({ ...req?.user }),
    }).send(res);
  };
  static signup = async (req, res) => {
    new SuccessResponse({
      message: "Success!",
      data: await AuthService.handleSignup(req.body),
    }).send(res);
  };

  static handleChangeInfo = async (req, res) => {
    new SuccessResponse({
      message: "Success!",
      data: await AuthService.handleChangeInfo(req?.user, req.body),
    }).send(res);
  };
  static logout = async (req, res) => {
    new SuccessResponse({
      message: "Đăng xuẩt thành công!",
      data: await AuthService.handleLogout(req?.user, req.body),
    }).send(res);
  };
  static refreshToken = async (req, res) => {
    new SuccessResponse({
      message: "refreshToken thành công!",
      data: await AuthService.HandlerefreshToken(req.body),
    }).send(res);
  };
  static checkMail = async (req, res) => {
    new SuccessResponse({
      message: "thành công!",
      data: await AuthService.handleCheckMail(req.body),
    }).send(res);
  };
  static destroySub = async (req, res) => {
    new SuccessResponse({
      message: "thành công!",
      data: await AuthService.handleDestroySub(req?.user),
    }).send(res);
  };
  static forgotPass = async (req, res) => {
    new SuccessResponse({
      message: "thành công!",
      data: await AuthService.handleForgotPass(req?.body),
    }).send(res);
  };
}

module.exports = AuthController;
