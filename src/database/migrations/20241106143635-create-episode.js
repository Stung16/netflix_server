"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("episodes", {
      id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
      },
      seasons_id: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: "seasons",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      episode_number: Sequelize.INTEGER,
      is_seen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      watched_duration: Sequelize.STRING(50),
      video_url: Sequelize.STRING(200),
      image_url: Sequelize.STRING(200),
      desc: Sequelize.STRING(400),
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
    await queryInterface.dropTable("episodes");
  },
};
