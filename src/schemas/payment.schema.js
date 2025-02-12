const { z } = require("zod");

const paymentSchema = z.object({
  service: z.enum(["Standard", "Premium", "Mobile", "Basic"]),
  price: z.string().regex(/^\d+$/, "Price must be a positive number"), // Kiểm tra price là chuỗi số
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});
module.exports = {
  paymentSchema,
};
