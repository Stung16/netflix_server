"use strict";
const express = require("express");
const { exec } = require("child_process");
const router = express.Router();
const AuthController = require("../../controllers/auth.controller");
const asyncHandler = require("../../utils/asyncHandler");
const authMiddleware = require("../../middlewares/auth.middleware");
const validateRequest = require("../../middlewares/validateRequest");
const {
  forgotPassSchema,
  loginSchema,
  refreshTokenSchema,
} = require("../../schemas/auth.schema");
const { log } = require("console");

/* GET home page. */
router.post(
  "/login",
  validateRequest(loginSchema),
  asyncHandler(AuthController.login)
);
router.get(
  "/profiles",
  authMiddleware,
  asyncHandler(AuthController.getAllProfile)
);
router.post(
  "/signup",
  validateRequest(loginSchema),
  asyncHandler(AuthController.signup)
);
router.post(
  "/check-mail",
  validateRequest(forgotPassSchema),
  asyncHandler(AuthController.checkMail)
);
router.post(
  "/update-profile",
  authMiddleware,
  asyncHandler(AuthController.handleChangeInfo)
);
router.post(
  "/logout",
  validateRequest(refreshTokenSchema),
  authMiddleware,
  asyncHandler(AuthController.logout)
);
router.post(
  "/refreshToken",
  validateRequest(refreshTokenSchema),
  asyncHandler(AuthController.refreshToken)
);
router.post(
  "/destroy-subscription",
  authMiddleware,
  asyncHandler(AuthController.destroySub)
);
router.post(
  "/forgot-pass",
  validateRequest(forgotPassSchema),
  asyncHandler(AuthController.forgotPass)
);
router.post("/runSeed", (req, res) => {
  exec("npx sequelize-cli db:seed:all", (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr });
    }
    log(stdout);
    res.json({ message: "Seeder chạy thành công!", output: stdout });
  });
});

module.exports = router;
