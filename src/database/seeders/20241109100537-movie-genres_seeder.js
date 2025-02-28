"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movie_genres = [
      { id: "movie_genre1", movie_id: "movie1", genre_id: "genres1" },
      { id: "movie_genre2", movie_id: "movie1", genre_id: "genres4" },
      { id: "movie_genre3", movie_id: "movie2", genre_id: "genres2" },
      { id: "movie_genre4", movie_id: "movie2", genre_id: "genres5" },
      { id: "movie_genre5", movie_id: "movie3", genre_id: "genres2" },
      { id: "movie_genre6", movie_id: "movie3", genre_id: "genres7" },
      { id: "movie_genre7", movie_id: "movie4", genre_id: "genres4" },
      { id: "movie_genre8", movie_id: "movie4", genre_id: "genres9" },
      { id: "movie_genre9", movie_id: "movie5", genre_id: "genres5" },
      { id: "movie_genre10", movie_id: "movie5", genre_id: "genres11" },
      { id: "movie_genre11", movie_id: "movie6", genre_id: "genres6" },
      { id: "movie_genre12", movie_id: "movie6", genre_id: "genres12" },
      { id: "movie_genre13", movie_id: "movie7", genre_id: "genres7" },
      { id: "movie_genre14", movie_id: "movie7", genre_id: "genres13" },
      { id: "movie_genre15", movie_id: "movie8", genre_id: "genres8" },
      { id: "movie_genre16", movie_id: "movie8", genre_id: "genres14" },
      { id: "movie_genre17", movie_id: "movie9", genre_id: "genres1" },
      { id: "movie_genre18", movie_id: "movie9", genre_id: "genres10" },
      { id: "movie_genre19", movie_id: "movie10", genre_id: "genres2" },
      { id: "movie_genre20", movie_id: "movie10", genre_id: "genres11" },
      { id: "movie_genre21", movie_id: "movie11", genre_id: "genres3" },
      { id: "movie_genre22", movie_id: "movie11", genre_id: "genres12" },
      { id: "movie_genre23", movie_id: "movie12", genre_id: "genres4" },
      { id: "movie_genre24", movie_id: "movie12", genre_id: "genres15" },
      { id: "movie_genre25", movie_id: "movie13", genre_id: "genres5" },
      { id: "movie_genre26", movie_id: "movie13", genre_id: "genres13" },
      { id: "movie_genre27", movie_id: "movie14", genre_id: "genres6" },
      { id: "movie_genre28", movie_id: "movie14", genre_id: "genres16" },
      { id: "movie_genre29", movie_id: "movie15", genre_id: "genres7" },
      { id: "movie_genre30", movie_id: "movie15", genre_id: "genres14" },
      { id: "movie_genre31", movie_id: "movie16", genre_id: "genres8" },
      { id: "movie_genre32", movie_id: "movie16", genre_id: "genres16" },
      { id: "movie_genre33", movie_id: "movie16", genre_id: "genres2" },
      { id: "movie_genre34", movie_id: "movie15", genre_id: "genres2" },
      { id: "movie_genre35", movie_id: "movie14", genre_id: "genres2" },
      { id: "movie_genre36", movie_id: "movie13", genre_id: "genres2" },
      { id: "movie_genre37", movie_id: "movie12", genre_id: "genres2" },
      { id: "movie_genre38", movie_id: "movie11", genre_id: "genres2" },
      { id: "movie_genre39", movie_id: "movie10", genre_id: "genres2" },
      { id: "movie_genre40", movie_id: "movie9", genre_id: "genres2" },
      { id: "movie_genre41", movie_id: "movie8", genre_id: "genres2" },
      { id: "movie_genre42", movie_id: "movie7", genre_id: "genres2" },
      { id: "movie_genre43", movie_id: "movie6", genre_id: "genres2" },
      { id: "movie_genre44", movie_id: "movie5", genre_id: "genres2" },
      { id: "movie_genre45", movie_id: "movie4", genre_id: "genres2" },
      //
      { id: "movie_genre46", movie_id: "movie16", genre_id: "genres3" },
      { id: "movie_genre47", movie_id: "movie15", genre_id: "genres3" },
      { id: "movie_genre48", movie_id: "movie14", genre_id: "genres3" },
      { id: "movie_genre49", movie_id: "movie13", genre_id: "genres3" },
      { id: "movie_genre50", movie_id: "movie12", genre_id: "genres3" },
      { id: "movie_genre51", movie_id: "movie11", genre_id: "genres3" },
      { id: "movie_genre52", movie_id: "movie10", genre_id: "genres3" },
      { id: "movie_genre53", movie_id: "movie9", genre_id: "genres3" },
      { id: "movie_genre54", movie_id: "movie8", genre_id: "genres3" },
      { id: "movie_genre55", movie_id: "movie1", genre_id: "genres3" },
      { id: "movie_genre56", movie_id: "movie2", genre_id: "genres3" },
      { id: "movie_genre57", movie_id: "movie3", genre_id: "genres3" },
      { id: "movie_genre58", movie_id: "movie4", genre_id: "genres3" },
      //
      { id: "movie_genre59", movie_id: "movie17", genre_id: "genres3" },
      { id: "movie_genre60", movie_id: "movie24", genre_id: "genres3" },
      { id: "movie_genre61", movie_id: "movie34", genre_id: "genres3" },
      { id: "movie_genre62", movie_id: "movie40", genre_id: "genres3" },
      { id: "movie_genre63", movie_id: "movie41", genre_id: "genres3" },
      { id: "movie_genre64", movie_id: "movie42", genre_id: "genres3" },
      { id: "movie_genre65", movie_id: "movie43", genre_id: "genres3" },
      { id: "movie_genre66", movie_id: "movie44", genre_id: "genres3" },
      { id: "movie_genre67", movie_id: "movie45", genre_id: "genres3" },
      { id: "movie_genre68", movie_id: "movie46", genre_id: "genres2" },
      { id: "movie_genre69", movie_id: "movie47", genre_id: "genres2" },
      { id: "movie_genre70", movie_id: "movie48", genre_id: "genres2" },
      { id: "movie_genre71", movie_id: "movie49", genre_id: "genres2" },
      { id: "movie_genre72", movie_id: "movie50", genre_id: "genres2" },
      { id: "movie_genre73", movie_id: "movie51", genre_id: "genres2" },
      { id: "movie_genre74", movie_id: "movie52", genre_id: "genres2" },
      { id: "movie_genre75", movie_id: "movie53", genre_id: "genres2" },
      { id: "movie_genre76", movie_id: "movie54", genre_id: "genres2" },
      { id: "movie_genre77", movie_id: "movie55", genre_id: "genres2" },
      { id: "movie_genre78", movie_id: "movie56", genre_id: "genres2" },
      { id: "movie_genre79", movie_id: "movie57", genre_id: "genres2" },
      { id: "movie_genre80", movie_id: "movie58", genre_id: "genres2" },
      { id: "movie_genre81", movie_id: "movie59", genre_id: "genres2" },
      { id: "movie_genre82", movie_id: "movie60", genre_id: "genres2" },
      { id: "movie_genre83", movie_id: "movie61", genre_id: "genres2" },
      { id: "movie_genre84", movie_id: "movie62", genre_id: "genres3" },
      { id: "movie_genre85", movie_id: "movie63", genre_id: "genres3" },
      { id: "movie_genre86", movie_id: "movie64", genre_id: "genres3" },
    ];

    await queryInterface.bulkInsert("movie_genres", movie_genres, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movie_genres", null, {});
  },
};
