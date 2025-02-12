"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const favorites = [
      {
        id: "favorite1",
        user_id: "idAdmin",
        movie_id: "movie1",
      },
      {
        id: "favorite2",
        user_id: "idAdmin",
        movie_id: "movie2",
      },
      {
        id: "favorite3",
        user_id: "idAdmin",
        movie_id: "movie3",
      },
      {
        id: "favorite4",
        user_id: "idAdmin",
        movie_id: "movie4",
      },
    ];
    await queryInterface.bulkInsert("favorites", favorites, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favorites", null, {});
  },
};
