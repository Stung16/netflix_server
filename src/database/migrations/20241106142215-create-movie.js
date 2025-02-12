"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        type: Sequelize.STRING(200),
      },
      desc: {
        type: Sequelize.STRING(200),
      },
      age_rating: {
        type: Sequelize.STRING(50),
      },
      thumbnail_url: {
        type: Sequelize.STRING(200),
      },
      release_year: {
        type: Sequelize.INTEGER,
      },
      image_url: {
        type: Sequelize.STRING(200),
      },
      trailer: {
        type: Sequelize.STRING(200),
      },
      type: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable("movies");
  },
};
