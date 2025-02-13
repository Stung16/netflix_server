const {
  BadRequestError,
  AuthFailureError,
  NotFoundError,
} = require("../../core/error.response.js");
const dayjs = require("dayjs");
const axios = require("axios");
const crypto = require("crypto");
const {
  User,
  KeyToken,
  Movie,
  Genre,
  Season,
  Episode,
  Actor,
  ContentWarning,
  Transaction,
  Tag,
} = require("../models/index.js");

class PaymentService {
  // muốn thanh toán được thì p dùng ngrok
  static handlePayment = async (reqBody, reqUser) => {
    const formattedDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const { id: idUser } = reqUser;
    const { service, price, phone } = reqBody;
    await Transaction.destroy({
      where: {
        status: "Chưa thanh toán",
      },
    });
    const { ACCESSKEY, SECRETKEY } = process.env;
    var accessKey = ACCESSKEY;
    var secretKey = SECRETKEY;
    var orderInfo = `Thanh toan gói ${service} thoi gian: ${formattedDate}`;
    var partnerCode = "MOMO";
    var redirectUrl = "https://www.youtube.com/";
    var ipnUrl = "https://netflix-server-nbmt.onrender.com/v1/api/callback";
    var requestType = "captureWallet";
    var amount = Number(price);
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = "";
    var orderGroupId = "";
    var autoCapture = true;
    var lang = "vi";

    var rawSignature =
      "accessKey=" +
      accessKey +
      "&amount=" +
      amount +
      "&extraData=" +
      extraData +
      "&ipnUrl=" +
      ipnUrl +
      "&orderId=" +
      orderId +
      "&orderInfo=" +
      orderInfo +
      "&partnerCode=" +
      partnerCode +
      "&redirectUrl=" +
      redirectUrl +
      "&requestId=" +
      requestId +
      "&requestType=" +
      requestType;
    var signature = crypto
      .createHmac("sha256", secretKey)
      .update(rawSignature)
      .digest("hex");

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      partnerName: "Test",
      storeId: "MomoTestStore",
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      lang: lang,
      requestType: requestType,
      autoCapture: autoCapture,
      extraData: extraData,
      orderGroupId: orderGroupId,
      signature: signature,
    });
    //options axois
    const option = {
      method: "POST",
      url: "https://test-payment.momo.vn/v2/gateway/api/create",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(requestBody),
      },
      data: requestBody,
    };
    await User.update(
      {
        phone: phone, // Dữ liệu muốn cập nhật
      },
      {
        where: {
          id: idUser, // Điều kiện cập nhật
        },
      }
    );
    const result = await axios(option);
    await Transaction.create({
      orderId: result.data?.orderId,
      user_id: idUser,
      amount: result.data?.amount,
      status: "Chưa thanh toán",
      paymentInfo: orderInfo,
    });

    return result.data;
  };
  static handlePaymentCallBack = async (reqBody) => {
    console.log({ reqBody });
    const transactionIntant = await Transaction.findOne({
      where: { orderId: reqBody.orderId },
    });

    if (reqBody?.resultCode === 0) {
      await transactionIntant.update(
        {
          status: "Đã thanh toán", // Dữ liệu muốn cập nhật
          updated_at: new Date(),
        },
        {
          where: {
            id: reqBody?.orderId, // Điều kiện cập nhật
          },
        }
      );
      await User.update(
        {
          subscriptions_id: "premium", // Dữ liệu muốn cập nhật
        },
        {
          where: {
            id: transactionIntant?.user_id, // Điều kiện cập nhật
          },
        }
      );
    } else {
      await transactionIntant.update(
        {
          status: "Chưa thanh toán", // Dữ liệu muốn cập nhật
          updated_at: new Date(),
        },
        {
          where: {
            id: reqBody?.orderId, // Điều kiện cập nhật
          },
        }
      );
    }
  };
  static handleTransaction = async ({ id }) => {
    const transaction = await Transaction.findOne({
      where: { user_id: id },
      order: [["created_at", "DESC"]],
    });
    if (!transaction) {
      throw new NotFoundError("Not found transaction!");
    }
    const { ACCESSKEY, SECRETKEY } = process.env;
    const rawSignature = `accessKey=${ACCESSKEY}&orderId=${transaction?.orderId}&partnerCode=MOMO&requestId=${transaction?.orderId}`;
    const signature = crypto
      .createHmac("sha256", SECRETKEY)
      .update(rawSignature)
      .digest("hex");
    const requestBody = JSON.stringify({
      partnerCode: "MOMO",
      requestId: transaction?.orderId,
      orderId: transaction?.orderId,
      signature,
      lang: "vi",
    });
    const options = {
      method: "POST",
      url: "https://test-payment.momo.vn/v2/gateway/api/query",
      headers: {
        "Content-Type": "application/json",
      },
      data: requestBody,
    };
    const result = await axios(options);

    return result.data;
  };
  static handleGetHistoryTransaction = async ({ id }) => {
    const transaction = await Transaction.findAll({
      where: { user_id: id },
      order: [["created_at", "DESC"]],
    });
    if (!transaction) {
      throw new NotFoundError("Not found transaction!");
    }

    return transaction;
  };
}

module.exports = PaymentService;
