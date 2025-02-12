"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: "user_id", // Khóa ngoại trong Transaction
        as: "users",
      });
    }
  }
  Transaction.init(
    {
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      user_id: DataTypes.STRING(50),
      amount: DataTypes.INTEGER,
      status: DataTypes.STRING,
      paymentInfo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Transaction",
      tableName: "transactions",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Transaction;
};
