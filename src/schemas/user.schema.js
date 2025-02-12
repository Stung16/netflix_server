const { z } = require("zod");

const changePassSchema = z
  .object({
    current_password: z
      .string()
      .min(8, "Current password must be at least 8 characters long"),
    new_password: z
      .string()
      .min(8, "New password must be at least 8 characters long"),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Confirm password must match new password",
    path: ["confirm_password"],
  });
module.exports = {
  changePassSchema,
};
