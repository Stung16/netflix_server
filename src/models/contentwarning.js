"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentWarning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContentWarning.belongsToMany(models.Movie, {
        foreignKey: "contentWarning_id",
        through: "movieContentWarring",
        as: "movies",
      });
      // define association here
    }
  }
  ContentWarning.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      content: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "ContentWarning",
      tableName: "contentWarnings",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return ContentWarning;
};
