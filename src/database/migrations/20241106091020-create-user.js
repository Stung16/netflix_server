"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      subscriptions_id: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: "subscriptions",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      provider_id: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: "providers",
          },
          key: "id",
        },
        onDelete: "CASCADE",
      },
      name: Sequelize.STRING(50),
      email: Sequelize.STRING(50),
      phone: Sequelize.INTEGER,
      password: Sequelize.STRING(100),
      avatar: {
        type: Sequelize.STRING(200),
        defaultValue:
          "https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg",
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      limit: {
        type: Sequelize.INTEGER,
      },
      subscriptions_id: Sequelize.STRING(50),
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
    await queryInterface.dropTable("users");
  },
};
