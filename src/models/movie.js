"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.User, {
        foreignKey: "movie_id",
        through: "favorites",
        as: "users",
      });
      Movie.belongsToMany(models.Genre, {
        foreignKey: "movie_id",
        through: "movie_genres",
        as: "genres",
      });
      Movie.belongsToMany(models.Actor, {
        foreignKey: "movie_id",
        through: "movieActors",
        as: "actors",
      });
      Movie.belongsToMany(models.Tag, {
        foreignKey: "movie_id",
        through: "movieTags",
        as: "tags",
      });
      Movie.belongsToMany(models.ContentWarning, {
        foreignKey: "movie_id",
        through: "movieContentWarring",
        as: "contentWarnings",
      });
      Movie.hasMany(models.Season, {
        foreignKey: "movie_id",
        as: "seasons",
      });
      // define association here
    }
  }
  Movie.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      title: DataTypes.STRING(200),
      desc: DataTypes.STRING(200),
      age_rating: DataTypes.STRING(50),
      thumbnail_url: DataTypes.STRING(200),
      trailer: DataTypes.STRING(200),
      release_year: DataTypes.INTEGER,
      image_url: DataTypes.STRING(200),
      type: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Movie;
};
