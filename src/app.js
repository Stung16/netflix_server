require("dotenv").config();
const createError = require("http-errors");
const { default: helmet } = require("helmet");
const express = require("express");
const path = require("path");
const logger = require("morgan");
var cors = require("cors");

// const { error } = require("console");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(helmet()); // bảo vệ thông tin dự án
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/", require("./routes"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Gửi phản hồi lỗi
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

module.exports = app;
