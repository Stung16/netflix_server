"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subscriptions = [
      {
        id: "phone",
        name: "Phone",
        price: 70000,
        time: 1,
      },
      {
        id: "basic",
        name: "Basic",
        price: 108000,
        time: 1,
      },
      {
        id: "standard ",
        name: "Standard",
        price: 220000,
        time: 1,
      },
      {
        id: "premium",
        name: "Premium",
        price: 260000,
        time: 1,
      },
    ];
    await queryInterface.bulkInsert("subscriptions", subscriptions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subscriptions", null, {});
  },
};
