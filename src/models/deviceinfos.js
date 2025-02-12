"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DeviceInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DeviceInfos.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "users",
      });
    }
  }
  DeviceInfos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: DataTypes.STRING(50),
      device_info: DataTypes.STRING(500),
      lastActive: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "DeviceInfos",
      tableName: "deviceInfos",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return DeviceInfos;
};
