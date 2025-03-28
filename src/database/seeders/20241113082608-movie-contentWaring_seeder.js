"use strict";
const { generateId } = require("../../utils/contanst");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movieContentWarring = [
      { id: generateId(), movie_id: "movie1", contentWarning_id: "warring1" },
      { id: generateId(), movie_id: "movie1", contentWarning_id: "warring4" },
      { id: generateId(), movie_id: "movie1", contentWarning_id: "warring5" },
      { id: generateId(), movie_id: "movie1", contentWarning_id: "warring12" },
      { id: generateId(), movie_id: "movie2", contentWarning_id: "warring2" },
      { id: generateId(), movie_id: "movie2", contentWarning_id: "warring5" },
      { id: generateId(), movie_id: "movie2", contentWarning_id: "warring13" },
      { id: generateId(), movie_id: "movie2", contentWarning_id: "warring12" },
      { id: generateId(), movie_id: "movie3", contentWarning_id: "warring3" },
      { id: generateId(), movie_id: "movie3", contentWarning_id: "warring7" },
      { id: generateId(), movie_id: "movie4", contentWarning_id: "warring4" },
      { id: generateId(), movie_id: "movie4", contentWarning_id: "warring9" },
      { id: generateId(), movie_id: "movie5", contentWarning_id: "warring5" },
      { id: generateId(), movie_id: "movie5", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie6", contentWarning_id: "warring6" },
      { id: generateId(), movie_id: "movie6", contentWarning_id: "warring12" },
      { id: generateId(), movie_id: "movie7", contentWarning_id: "warring7" },
      { id: generateId(), movie_id: "movie7", contentWarning_id: "warring13" },
      { id: generateId(), movie_id: "movie8", contentWarning_id: "warring8" },
      { id: generateId(), movie_id: "movie8", contentWarning_id: "warring14" },
      { id: generateId(), movie_id: "movie9", contentWarning_id: "warring1" },
      { id: generateId(), movie_id: "movie9", contentWarning_id: "warring10" },
      { id: generateId(), movie_id: "movie10", contentWarning_id: "warring2" },
      { id: generateId(), movie_id: "movie10", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie11", contentWarning_id: "warring3" },
      { id: generateId(), movie_id: "movie11", contentWarning_id: "warring12" },
      { id: generateId(), movie_id: "movie12", contentWarning_id: "warring4" },
      { id: generateId(), movie_id: "movie12", contentWarning_id: "warring15" },
      { id: generateId(), movie_id: "movie13", contentWarning_id: "warring5" },
      { id: generateId(), movie_id: "movie13", contentWarning_id: "warring13" },
      { id: generateId(), movie_id: "movie14", contentWarning_id: "warring6" },
      { id: generateId(), movie_id: "movie14", contentWarning_id: "warring15" },
      { id: generateId(), movie_id: "movie15", contentWarning_id: "warring7" },
      { id: generateId(), movie_id: "movie15", contentWarning_id: "warring14" },
      { id: generateId(), movie_id: "movie16", contentWarning_id: "warring8" },
      { id: generateId(), movie_id: "movie16", contentWarning_id: "warring11" },
      //
      { id: generateId(), movie_id: "movie17", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie18", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie19", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie20", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie21", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie22", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie23", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie24", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie25", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie26", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie27", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie28", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie29", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie30", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie31", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie32", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie33", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie34", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie35", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie36", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie37", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie38", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie39", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie40", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie41", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie42", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie43", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie44", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie45", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie46", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie47", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie48", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie49", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie50", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie51", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie52", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie53", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie54", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie55", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie56", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie57", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie58", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie59", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie60", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie61", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie62", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie63", contentWarning_id: "warring11" },
      { id: generateId(), movie_id: "movie64", contentWarning_id: "warring11" },
    ];

    await queryInterface.bulkInsert(
      "movieContentWarring",
      movieContentWarring,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movieContentWarring", null, {});
  },
};
