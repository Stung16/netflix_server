"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorite.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      user_id: DataTypes.STRING(50),
      movie_id: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Favorite",
      tableName: "favorites",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Favorite;
};
