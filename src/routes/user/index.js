"use strict";
const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user.controller");
const asyncHandler = require("../../utils/asyncHandler");
const authMiddleware = require("../../middlewares/auth.middleware");
const validateRequest = require("../../middlewares/validateRequest");
const { changePassSchema } = require("../../schemas/user.schema");

/* GET home page. */
router.get("/profile", authMiddleware, asyncHandler(UserController.profile));
router.post(
  "/change-pass",
  validateRequest(changePassSchema),
  authMiddleware,
  asyncHandler(UserController.changePass),
  router.post(
    "/update-active",
    authMiddleware,
    asyncHandler(UserController.updateActive)
  ),
  router.get(
    "/devices",
    authMiddleware,
    asyncHandler(UserController.getDevices)
  )
);

module.exports = router;
