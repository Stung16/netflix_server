"use strict";
const { generateId } = require("../../utils/contanst");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movieTags = [
      { id: generateId(), movie_id: "movie1", tag_id: "tag1" },
      { id: generateId(), movie_id: "movie1", tag_id: "tag4" },
      { id: generateId(), movie_id: "movie1", tag_id: "tag5" },
      { id: generateId(), movie_id: "movie1", tag_id: "tag12" },
      { id: generateId(), movie_id: "movie2", tag_id: "tag2" },
      { id: generateId(), movie_id: "movie2", tag_id: "tag5" },
      { id: generateId(), movie_id: "movie2", tag_id: "tag13" },
      { id: generateId(), movie_id: "movie2", tag_id: "tag17" },
      { id: generateId(), movie_id: "movie3", tag_id: "tag3" },
      { id: generateId(), movie_id: "movie3", tag_id: "tag7" },
      { id: generateId(), movie_id: "movie4", tag_id: "tag4" },
      { id: generateId(), movie_id: "movie4", tag_id: "tag9" },
      { id: generateId(), movie_id: "movie5", tag_id: "tag5" },
      { id: generateId(), movie_id: "movie5", tag_id: "tag11" },
      { id: generateId(), movie_id: "movie6", tag_id: "tag6" },
      { id: generateId(), movie_id: "movie6", tag_id: "tag12" },
      { id: generateId(), movie_id: "movie7", tag_id: "tag7" },
      { id: generateId(), movie_id: "movie7", tag_id: "tag13" },
      { id: generateId(), movie_id: "movie8", tag_id: "tag8" },
      { id: generateId(), movie_id: "movie8", tag_id: "tag14" },
      { id: generateId(), movie_id: "movie9", tag_id: "tag1" },
      { id: generateId(), movie_id: "movie9", tag_id: "tag10" },
      { id: generateId(), movie_id: "movie10", tag_id: "tag2" },
      { id: generateId(), movie_id: "movie10", tag_id: "tag11" },
      { id: generateId(), movie_id: "movie11", tag_id: "tag3" },
      { id: generateId(), movie_id: "movie11", tag_id: "tag12" },
      { id: generateId(), movie_id: "movie12", tag_id: "tag4" },
      { id: generateId(), movie_id: "movie12", tag_id: "tag15" },
      { id: generateId(), movie_id: "movie13", tag_id: "tag5" },
      { id: generateId(), movie_id: "movie13", tag_id: "tag13" },
      { id: generateId(), movie_id: "movie14", tag_id: "tag6" },
      { id: generateId(), movie_id: "movie14", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie15", tag_id: "tag7" },
      { id: generateId(), movie_id: "movie15", tag_id: "tag14" },
      { id: generateId(), movie_id: "movie16", tag_id: "tag8" },
      { id: generateId(), movie_id: "movie16", tag_id: "tag16" },
      //
      { id: generateId(), movie_id: "movie17", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie18", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie19", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie20", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie21", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie22", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie23", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie24", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie25", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie26", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie27", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie28", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie29", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie30", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie31", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie32", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie33", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie34", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie35", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie36", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie37", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie38", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie39", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie40", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie41", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie42", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie43", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie44", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie45", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie46", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie47", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie48", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie49", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie50", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie51", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie52", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie53", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie54", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie55", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie56", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie57", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie58", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie59", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie60", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie61", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie62", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie63", tag_id: "tag16" },
      { id: generateId(), movie_id: "movie64", tag_id: "tag16" },
    ];

    await queryInterface.bulkInsert("movieTags", movieTags, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movieTags", null, {});
  },
};
