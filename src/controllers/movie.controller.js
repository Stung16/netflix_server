const { SuccessResponse } = require("../../core/success.response.js");
const MovieService = require("../services/movie.service.js");

class MovieController {
  static banner = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handleGetBanner(),
    }).send(res);
  };
  static genreId = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handleGetGenreById(req.user, req.params),
    }).send(res);
  };
  static playList = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handleGetPlayList(req.user, req.params),
    }).send(res);
  };
  static watch = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handlGetVideo({ ...req.query, ...req.params }),
    }).send(res);
  };
  static favorites = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handleFavoritesMovie(req?.user),
    }).send(res);
  };
  static addFavorite = async (req, res, next) => {
    new SuccessResponse({
      message: "add Success!",
      data: await MovieService.handleAddFavoriMovie(req.user, req.params),
    }).send(res);
  };
  static deleteFavorite = async (req, res, next) => {
    new SuccessResponse({
      message: "dele Success!",
      data: await MovieService.handleDeleteFavoriMovie(req.user, req.params),
    }).send(res);
  };
  static search = async (req, res, next) => {
    new SuccessResponse({
      message: "Success!",
      data: await MovieService.handleSearch(req.user, req.query),
    }).send(res);
  };
}

module.exports = MovieController;
