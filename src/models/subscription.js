"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subscription.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(100, 0),
      time: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subscription",
      tableName: "subscriptions",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Subscription;
};
