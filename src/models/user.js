"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Movie, {
        foreignKey: "movie_id",
        through: "favorites",
        as: "movies",
      });
      User.hasMany(models.Transaction, {
        foreignKey: "user_id",
        as: "transactions",
      });
      User.hasMany(models.DeviceInfos, {
        foreignKey: "user_id",
        as: "deviceInfos",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING(50),
      email: DataTypes.STRING(50),
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING(100),
      avatar: DataTypes.STRING(200),
      provider_id: DataTypes.STRING(50),
      status: DataTypes.BOOLEAN,
      limit: DataTypes.INTEGER,
      subscriptions_id: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};
