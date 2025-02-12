"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seasons = [
      {
        id: "season1",
        movie_id: "movie1",
        season_number: 1,
        title: "The Lord of the Rings",
      },
      {
        id: "season2", // Changed from season3 to season2
        movie_id: "movie2",
        season_number: 1,
        title: "Mad Max",
      },
      {
        id: "season3", // Changed from season4 to season3
        movie_id: "movie3",
        season_number: 1,
        title: "The Lord of the Rings: Season 1",
      },
      {
        id: "season4", // Changed from season4 to season4_2
        movie_id: "movie3",
        season_number: 2,
        title: "The Lord of the Rings: Season 2",
      },
      {
        id: "season5",
        movie_id: "movie4",
        season_number: 1,
        title: "Interstellar",
      },
      {
        id: "season6",
        movie_id: "movie5",
        season_number: 1,
        title: "movie5",
      },
      {
        id: "season7",
        movie_id: "movie6",
        season_number: 1,
        title: "movie6",
      },
      {
        id: "season8",
        movie_id: "movie7",
        season_number: 1,
        title: "movie7",
      },
      {
        id: "season9",
        movie_id: "movie8",
        season_number: 1,
        title: "movie8",
      },
      {
        id: "season10",
        movie_id: "movie9",
        season_number: 1,
        title: "movie9",
      },
      {
        id: "season11",
        movie_id: "movie10",
        season_number: 1,
        title: "movie10",
      },
      {
        id: "season12", // Changed from season12 to season12_2
        movie_id: "movie11",
        season_number: 1,
        title: "movie11",
      },
      {
        id: "season13", // Changed from season12 to season13
        movie_id: "movie12",
        season_number: 1,
        title: "movie12",
      },
      {
        id: "season14", // Changed from season12 to season14
        movie_id: "movie13",
        season_number: 1,
        title: "movie13",
      },
      {
        id: "season15", // Changed from season3 to season15
        movie_id: "movie14",
        season_number: 1,
        title: "movie14 ss1",
      },
      {
        id: "season16", // Changed from season4 to season16
        movie_id: "movie14",
        season_number: 2,
        title: "movie14 ss2",
      },
      {
        id: "season17", // Changed from season3 to season17
        movie_id: "movie15",
        season_number: 1,
        title: "movie15 ss1",
      },
      {
        id: "season18", // Changed from season4 to season18
        movie_id: "movie15",
        season_number: 2,
        title: "movie15 ss2",
      },
      {
        id: "season19", // Changed from season3 to season19
        movie_id: "movie16",
        season_number: 1,
        title: "movie16 ss1",
      },
      {
        id: "season20", // Changed from season4 to season20
        movie_id: "movie16",
        season_number: 2,
        title: "movie16 ss2",
      },
      {
        id: "season21",
        movie_id: "movie17",
        season_number: 1,
        title: "movie17 ss1",
      },
      {
        id: "season22",
        movie_id: "movie18",
        season_number: 1,
        title: "movie18 ss1",
      },
      {
        id: "season23",
        movie_id: "movie19",
        season_number: 1,
        title: "movie19 ss1",
      },
      {
        id: "season24",
        movie_id: "movie20",
        season_number: 1,
        title: "movie20 ss1",
      },
      {
        id: "season25",
        movie_id: "movie21",
        season_number: 1,
        title: "movie21 ss1",
      },
      {
        id: "season26",
        movie_id: "movie22",
        season_number: 1,
        title: "movie22 ss1",
      },
      {
        id: "season27",
        movie_id: "movie23",
        season_number: 1,
        title: "movie23 ss1",
      },
      {
        id: "season28",
        movie_id: "movie24",
        season_number: 1,
        title: "movie24 ss1",
      },
      {
        id: "season29",
        movie_id: "movie25",
        season_number: 1,
        title: "movie25 ss1",
      },
      {
        id: "season30",
        movie_id: "movie26",
        season_number: 1,
        title: "movie26 ss1",
      },
      {
        id: "season31",
        movie_id: "movie27",
        season_number: 1,
        title: "movie27 ss1",
      },
      {
        id: "season32",
        movie_id: "movie28",
        season_number: 1,
        title: "movie28 ss1",
      },
      {
        id: "season33",
        movie_id: "movie29",
        season_number: 1,
        title: "movie29 ss1",
      },
      {
        id: "season34",
        movie_id: "movie30",
        season_number: 1,
        title: "movie30 ss1",
      },
      {
        id: "season35",
        movie_id: "movie31",
        season_number: 1,
        title: "movie31 ss1",
      },
      {
        id: "season36",
        movie_id: "movie32",
        season_number: 1,
        title: "movie32 ss1",
      },
      {
        id: "season37",
        movie_id: "movie33",
        season_number: 1,
        title: "movie33 ss1",
      },
      {
        id: "season38",
        movie_id: "movie34",
        season_number: 1,
        title: "movie34 ss1",
      },
      {
        id: "season39",
        movie_id: "movie35",
        season_number: 1,
        title: "movie35 ss1",
      },
      {
        id: "season40",
        movie_id: "movie36",
        season_number: 1,
        title: "movie36 ss1",
      },
      {
        id: "season41",
        movie_id: "movie37",
        season_number: 1,
        title: "movie37 ss1",
      },
      {
        id: "season42",
        movie_id: "movie38",
        season_number: 1,
        title: "movie38 ss1",
      },
      {
        id: "season43",
        movie_id: "movie39",
        season_number: 1,
        title: "movie39 ss1",
      },
      {
        id: "season44",
        movie_id: "movie40",
        season_number: 1,
        title: "movie40 ss1",
      },
      {
        id: "season45",
        movie_id: "movie41",
        season_number: 1,
        title: "movie41 ss1",
      },
      {
        id: "season46",
        movie_id: "movie42",
        season_number: 1,
        title: "movie42 ss1",
      },
      {
        id: "season47",
        movie_id: "movie43",
        season_number: 1,
        title: "movie43 ss1",
      },
      {
        id: "season48",
        movie_id: "movie44",
        season_number: 1,
        title: "movie44 ss1",
      },
      {
        id: "season49",
        movie_id: "movie45",
        season_number: 1,
        title: "movie45 ss1",
      },
      {
        id: "season50",
        movie_id: "movie46",
        season_number: 1,
        title: "movie46 ss1",
      },
      {
        id: "season51",
        movie_id: "movie47",
        season_number: 1,
        title: "movie47 ss1",
      },
      {
        id: "season52",
        movie_id: "movie48",
        season_number: 1,
        title: "movie48 ss1",
      },
      {
        id: "season53",
        movie_id: "movie49",
        season_number: 1,
        title: "movie49 ss1",
      },
      {
        id: "season54",
        movie_id: "movie50",
        season_number: 1,
        title: "movie50 ss1",
      },
      {
        id: "season55",
        movie_id: "movie51",
        season_number: 1,
        title: "movie51 ss1",
      },
      {
        id: "season56",
        movie_id: "movie52",
        season_number: 1,
        title: "movie52 ss1",
      },
      {
        id: "season57",
        movie_id: "movie53",
        season_number: 1,
        title: "movie53 ss1",
      },
      {
        id: "season58",
        movie_id: "movie54",
        season_number: 1,
        title: "movie54 ss1",
      },
      {
        id: "season59",
        movie_id: "movie55",
        season_number: 1,
        title: "movie55 ss1",
      },
      {
        id: "season60",
        movie_id: "movie56",
        season_number: 1,
        title: "movie56 ss1",
      },
      {
        id: "season61",
        movie_id: "movie57",
        season_number: 1,
        title: "movie57 ss1",
      },
      {
        id: "season62",
        movie_id: "movie58",
        season_number: 1,
        title: "movie58 ss1",
      },
      {
        id: "season63",
        movie_id: "movie59",
        season_number: 1,
        title: "movie59 ss1",
      },
      {
        id: "season64",
        movie_id: "movie60",
        season_number: 1,
        title: "movie60 ss1",
      },
      {
        id: "season65",
        movie_id: "movie61",
        season_number: 1,
        title: "movie61 ss1",
      },
      {
        id: "season66",
        movie_id: "movie62",
        season_number: 1,
        title: "movie62 ss1",
      },
      {
        id: "season67",
        movie_id: "movie63",
        season_number: 1,
        title: "movie63 ss1",
      },
      {
        id: "season68",
        movie_id: "movie64",
        season_number: 1,
        title: "movie64 ss1",
      },
    ];

    await queryInterface.bulkInsert("seasons", seasons, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("seasons", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
