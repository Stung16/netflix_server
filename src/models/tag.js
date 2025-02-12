"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.belongsToMany(models.Movie, {
        foreignKey: "tag_id",
        through: "movieTags",
        as: "movies",
      });
    }
  }
  Tag.init(
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Tag",
      tableName: "tags",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Tag;
};
