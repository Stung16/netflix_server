const {
  BadRequestError,
  AuthFailureError,
  NotFoundError,
} = require("../../core/error.response.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  User,
  KeyToken,
  Movie,
  Genre,
  Season,
  Episode,
  Actor,
  ContentWarning,
  Favorite,
  Tag,
} = require("../models/index.js");
const {
  shuffleArray,
  getEpisodeIds,
  generateId,
  ListNameGenre_vi,
  ListNameGenre_en,
} = require("../utils/contanst.js");
const { Op } = require("sequelize");
class MovieService {
  static handleGetHome = async ({ lang }) => {
    if (lang !== "vi" || lang !== "en") lang = "en";
    const { rows } = await Movie.findAndCountAll({
      include: [
        {
          model: Genre,
          as: "genres",
          where: {
            name: [
              "Anime",
              "Lãng mạn",
              "Châu Á",
              "Giả tưởng",
              "Giành giải thưởng",
              "Giật gân",
              "Hài",
            ], // Tìm các thể loại có name là "anime" hoặc "actions"
          },
        },
        {
          model: Season,
          as: "seasons",
          include: {
            model: Episode,
            as: "episodes",
          },
        },
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: ContentWarning,
          as: "contentWarnings",
        },
      ],
    });
    if (!rows) throw new BadRequestError("idProfile not exit");

    return [
      {
        movies: shuffleArray(rows.slice(0, 12)),
        title:
          lang === "vi"
            ? "Có thể bạn sẽ mê các tác phẩm này"
            : "We Think You’ll Love These",
      },
      {
        movies: shuffleArray(rows.slice(0, 12)),
        title: lang === "vi" ? "Phim chính kịch Hàn Quốc" : "Korean Drama",
      },
      {
        movies: shuffleArray(rows.slice(0, 12)),
        title: lang === "vi" ? "Phim Châu Á" : "Asian TV Shows",
      },
      {
        movies: shuffleArray(rows.slice(0, 12)),
        title:
          lang === "vi"
            ? "Chương trình truyền hình Âu – Mỹ giành giải thưởng"
            : "Award-Winning TV Shows",
      },
      {
        movies: shuffleArray(rows.slice(0, 12)),
        title: lang === "vi" ? "Phim bom tấn" : "Blockbuster Movies",
      },
      { movies: shuffleArray(rows.slice(0, 12)), title: "Anime" },
    ];
  };
  static handleGetBanner = async () => {
    const getRandomBanner = (banner) => {
      const randomIndex = Math.floor(Math.random() * banner.length); // Tạo chỉ mục ngẫu nhiên
      return banner[randomIndex]; // Trả về user ngẫu nhiên
    };
    const banner = await Movie.findAll({
      // order: Sequelize.literal("RANDOM()"), // Sắp xếp ngẫu nhiên
      include: [
        {
          model: Genre,
          as: "genres",
        },
        {
          model: Season,
          as: "seasons",
          include: {
            model: Episode,
            as: "episodes",
          },
        },
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: ContentWarning,
          as: "contentWarnings",
        },
      ],
    });
    if (!banner) throw new BadRequestError("Not found banner!");
    const bannerRandum = getRandomBanner(banner);
    return bannerRandum;
  };
  static handleGetGenreById = async (reqUser, reqParams) => {
    const { id, lang } = reqParams;
    const { id: idUser } = reqUser;

    const genre = await Genre.findOne({
      where: { id: id },
    });
    if (!genre) throw new NotFoundError("id genre not exit");

    const { rows } = await Movie.findAndCountAll({
      include: [
        {
          model: Genre,
          as: "genres",
          where: {
            id: id, // Tìm các thể loại có name là "anime" hoặc "actions"
          },
        },
        {
          model: Season,
          as: "seasons",
          include: {
            model: Episode,
            as: "episodes",
          },
        },
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: ContentWarning,
          as: "contentWarnings",
        },
      ],
    });
    if (!rows) throw new NotFoundError("Data not Found");
    const favorite = await Favorite.findAll({
      where: { user_id: idUser },
      attributes: ["movie_id"],
    });
    return {
      dataGenre: [
        {
          movies: rows.slice(0, 18),
          title:
            lang === "vi"
              ? ListNameGenre_vi[id]?.[0]
              : ListNameGenre_en[id]?.[0],
        },
        {
          movies: rows.slice(rows.slice(1, 18)).reverse(),
          title:
            lang === "vi"
              ? ListNameGenre_vi[id]?.[1]
              : ListNameGenre_en[id]?.[1],
        },
        {
          movies: rows.slice(rows.slice(1, 19)),
          title:
            lang === "vi"
              ? ListNameGenre_vi[id]?.[2]
              : ListNameGenre_en[id]?.[2],
        },
        {
          movies: rows.slice(rows.slice(2, 20)),
          title:
            lang === "vi"
              ? ListNameGenre_vi[id]?.[4]
              : ListNameGenre_en[id]?.[4],
        },
        {
          movies: rows.slice(rows.slice(2, 20)).reverse(),
          title:
            lang === "vi"
              ? ListNameGenre_vi[id]?.[5]
              : ListNameGenre_en[id]?.[5],
        },
      ],
      idMovieFavorite: favorite.map((item) => item.movie_id) || [],
    };
  };
  static handlGetVideo = async ({ trackId, id }) => {
    const movie = await Movie.findOne({
      where: { id: id },
      include: [
        {
          model: Season,
          as: "seasons",
          where: { season_number: "1" },
          include: {
            model: Episode,
            as: "episodes",
          },
        },
      ],
    });
    if (!movie) throw new NotFoundError("Data not Found");
    const episodes = getEpisodeIds(movie);
    if (!episodes.includes(trackId))
      throw new NotFoundError("episode not Found");
    return movie;
  };
  static handleFavoritesMovie = async ({ id }) => {
    const favorite = await Favorite.findAll({
      where: { user_id: id },
      attributes: ["movie_id"],
    });
    if (!favorite) return [];
    const movieFavorites = await Movie.findAll({
      where: {
        id: favorite.map((item) => item.movie_id),
      },
      include: [
        {
          model: Genre,
          as: "genres",
        },
        {
          model: Season,
          as: "seasons",
          include: {
            model: Episode,
            as: "episodes",
          },
        },
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: ContentWarning,
          as: "contentWarnings",
        },
      ],
    });
    if (!favorite) throw new NotFoundError("Data not Found");

    return movieFavorites;
  };
  static handleAddFavoriMovie = async (reqUser, reqParams) => {
    const { id: idUser } = reqUser;
    const { id } = reqParams;
    const favoriteMovie = await Favorite.create({
      id: generateId(),
      user_id: idUser,
      movie_id: id,
    });
    if (!favoriteMovie) throw new NotFoundError("Data not Found");
  };
  static handleDeleteFavoriMovie = async (reqUser, reqParams) => {
    const { id: idUser } = reqUser;
    const { id } = reqParams;
    await Favorite.destroy({
      where: {
        movie_id: id,
        user_id: idUser,
      },
    });
  };
  static handleSearch = async (reqUser, reqQuery) => {
    const { q } = reqQuery;
    const { id: idUser } = reqUser;
    const options = {
      include: [
        {
          model: Genre,
          as: "genres",
        },
        {
          model: Season,
          as: "seasons",
          include: {
            model: Episode,
            as: "episodes",
          },
        },
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: ContentWarning,
          as: "contentWarnings",
        },
      ],
      where: {}, // Khởi tạo where để tránh lỗi khi thêm điều kiện
    };

    if (q) {
      options.where.title = {
        [Op.iLike]: `%${q}%`,
      };
    }

    const movies = await Movie.findAll(options);

    if (!movies || movies.length === 0) {
      throw new NotFoundError("Data not Found");
    }
    const favorite = await Favorite.findAll({
      where: { user_id: idUser },
      attributes: ["movie_id"],
    });

    return {
      movies,
      idMovieFavorite: favorite.map((item) => item.movie_id) || [],
    };
  };
}

module.exports = MovieService;
