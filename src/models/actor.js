"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsToMany(models.Movie, {
        foreignKey: "actor_id",
        through: "movieActors",
        as: "movies",
      });
      // define association here
    }
  }
  Actor.init(
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
      modelName: "Actor",
      tableName: "actors",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Actor;
};
