"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsTo(models.Season, {
        foreignKey: "seasons_id",
        as: "seasons",
      });
      // define association here
    }
  }
  Episode.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      seasons_id: DataTypes.STRING(50),
      image_url: DataTypes.STRING(200),
      desc: DataTypes.STRING(400),
      episode_number: DataTypes.INTEGER,
      is_seen: DataTypes.BOOLEAN,
      watched_duration: DataTypes.STRING(50),
      video_url: DataTypes.STRING(200),
    },
    {
      sequelize,
      modelName: "Episode",
      tableName: "episodes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Episode;
};
