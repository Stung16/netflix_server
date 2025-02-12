"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = [
      {
        id: "idAdmin",
        name: "admin",
        email: "adminNetflix@gmail.com",
        password: bcrypt.hashSync("Abcxyz123", bcrypt.genSaltSync(10)),
        provider_id: "email",
        subscriptions_id: "premium",
        limit: 5,
        phone: "0375072400",
        avatar:
          "https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg",
      },
      {
        id: "idprofile1",
        name: "profile1",
        email: "profile1@gmail.com",
        password: bcrypt.hashSync("Abcxyz123", bcrypt.genSaltSync(10)),
        provider_id: "email",
        subscriptions_id: "standard",
        phone: null,
        limit: 2,
        avatar:
          "https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg",
      },
      {
        id: "idprofile2",
        name: "profile2",
        email: "profile2@gmail.com",
        password: bcrypt.hashSync("Abcxyz123", bcrypt.genSaltSync(10)),
        provider_id: "email",
        subscriptions_id: "phone",
        phone: null,
        limit: 1,
        avatar:
          "https://res.cloudinary.com/dtht61558/image/upload/v1714926727/fallback-avatar.155cdb2376c5d99ea151_clwp1n.jpg",
      },
    ];
    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
