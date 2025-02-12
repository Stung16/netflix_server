const { z } = require("zod");

const forgotPassSchema = z.object({
  email: z.string().email("Invalid email."), // Kiểm tra định dạng email
});
const loginSchema = z.object({
  email: z.string().email("Invalid email."),
  password: z.string("requied").min(8, {
    message: "Password must be at least 8 characters long!",
  }),
});
const refreshTokenSchema = z.object({
  refreshToken: z.string("requied"),
});
module.exports = {
  forgotPassSchema,
  loginSchema,
  refreshTokenSchema,
};
