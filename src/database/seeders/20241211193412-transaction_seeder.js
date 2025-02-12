"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transactions = [
      {
        orderId: "2136919317abc",
        user_id: "idAdmin",
        amount: 100000,
        status: "Đã thanh toán",
        paymentInfo: "thông tin thanh toán",
      },
    ];
    await queryInterface.bulkInsert("transactions", transactions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
