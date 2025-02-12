"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genre.belongsToMany(models.Movie, {
        foreignKey: "genre_id",
        through: "movie_genres",
        as: "movies",
      });
      // define association here
    }
  }
  Genre.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Genre",
      tableName: "genres",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Genre;
};
