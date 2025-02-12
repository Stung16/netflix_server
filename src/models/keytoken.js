"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KeyToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KeyToken.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      user_id: DataTypes.STRING(50),
      status: DataTypes.BOOLEAN,
      refresh_token: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "KeyToken",
      tableName: "keyTokens",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return KeyToken;
};
