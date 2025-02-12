"use strict";
const express = require("express");
const router = express.Router();
const asyncHandler = require("../../utils/asyncHandler");
const authMiddleware = require("../../middlewares/auth.middleware");
const PaymentController = require("../../controllers/payment.controller");
const validateRequest = require("../../middlewares/validateRequest");
const { paymentSchema } = require("../../schemas/payment.schema");

/* GET home page. */
router.post(
  "/payment",
  validateRequest(paymentSchema),
  authMiddleware,
  asyncHandler(PaymentController.payment)
);
router.post("/callback", asyncHandler(PaymentController.paymentCallBack));
router.get(
  "/transaction-status",
  authMiddleware,
  asyncHandler(PaymentController.transaction)
);
router.get(
  "/history-transaction",
  authMiddleware,
  asyncHandler(PaymentController.getHistoryTransaction)
);

module.exports = router;
