"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Season.belongsTo(models.Movie, {
        foreignKey: "movie_id",
        as: "movies",
      });
      Season.hasMany(models.Episode, {
        foreignKey: "seasons_id",
        as: "episodes",
      });
      // define association here
    }
  }
  Season.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      movie_id: DataTypes.STRING(50),
      season_number: DataTypes.INTEGER,
      title: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Season",
      tableName: "seasons",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Season;
};
