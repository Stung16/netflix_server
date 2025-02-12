"use strict";
const express = require("express");
const router = express.Router();
const MovieController = require("../../controllers/movie.controller");
const asyncHandler = require("../../utils/asyncHandler");
const authMiddleware = require("../../middlewares/auth.middleware");

/* GET home page. */
router.get("/banner", authMiddleware, asyncHandler(MovieController.banner));
router.get(
  "/genre/:id/:lang",
  authMiddleware,
  asyncHandler(MovieController.genreId)
);
router.get(
  "/playList/:id",
  authMiddleware,
  asyncHandler(MovieController.playList)
);
router.get("/watch/:id", asyncHandler(MovieController.watch));
router.get(
  "/favorites",
  authMiddleware,
  asyncHandler(MovieController.favorites)
);
router.get(
  "/favorite/:id",
  authMiddleware,
  asyncHandler(MovieController.addFavorite)
);
router.delete(
  "/favorite/:id",
  authMiddleware,
  asyncHandler(MovieController.deleteFavorite)
);
router.get("/search", authMiddleware, asyncHandler(MovieController.search));

module.exports = router;
