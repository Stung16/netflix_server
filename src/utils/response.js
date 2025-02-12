const removeEmpty = require("./removeEmty");

module.exports = {
  successRespone: (
    res,
    status = 200,
    message = "Success!!",
    data,
    options = {}
  ) => {
    return res.status(status).json(
      removeEmpty({
        status,
        message,
        data,
        ...options,
      })
    );
  },
  errorRespone: (res, status = 400, message = "Error!!", options = {}) => {
    return res.status(status).json(
      removeEmpty({
        status,
        message,
        ...options,
      })
    );
  },
};
