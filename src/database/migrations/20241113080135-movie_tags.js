"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movieTags", {
      id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      movie_id: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: "movies",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      tag_id: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: "tags",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE(), //postgres tự động chuyển timestamp with timezone
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE(), //postgres tự động chuyển timestamp with timezone
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movieTags");
  },
};
