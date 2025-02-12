const { SuccessResponse } = require("../../core/success.response.js");
const PaymentService = require("../services/payment.service.js");

class PaymentController {
  static payment = async (req, res, next) => {
    new SuccessResponse({
      message: "payed Success!",
      data: await PaymentService.handlePayment(req?.body, req?.user),
    }).send(res);
  };
  static paymentCallBack = async (req, res, next) => {
    new SuccessResponse({
      message: "payed Success!",
      data: await PaymentService.handlePaymentCallBack(req?.body),
    }).send(res);
  };
  static transaction = async (req, res, next) => {
    new SuccessResponse({
      message: "payed Success!",
      data: await PaymentService.handleTransaction({ ...req?.user }),
    }).send(res);
  };
  static getHistoryTransaction = async (req, res, next) => {
    new SuccessResponse({
      message: "payed Success!",
      data: await PaymentService.handleGetHistoryTransaction({ ...req?.user }),
    }).send(res);
  };
}

module.exports = PaymentController;
