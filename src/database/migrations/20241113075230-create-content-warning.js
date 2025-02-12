"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contentWarnings", {
      id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      content: {
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
    await queryInterface.dropTable("contentWarnings");
  },
};
