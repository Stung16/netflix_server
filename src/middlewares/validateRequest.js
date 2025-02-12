const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Data invalid!",
        errors: result.error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }

    next();
  };
};

module.exports = validateRequest;
