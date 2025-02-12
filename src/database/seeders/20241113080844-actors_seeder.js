"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const actors = [
      // Diễn viên Trung Quốc
      { id: "actor1", name: "Vương Truyền Quân" },
      { id: "actor2", name: "Trương Ninh" },
      { id: "actor3", name: "Ngô Trấn Vũ" },
      { id: "actor4", name: "Phạm Băng Băng" },
      { id: "actor5", name: "Lưu Đức Hoa" },
      { id: "actor6", name: "Châu Tinh Trì" },
      { id: "actor7", name: "Lý Băng Băng" },
      { id: "actor8", name: "Châu Kiệt Luân" },
      { id: "actor9", name: "Dương Mịch" },
      { id: "actor10", name: "Triệu Vy" },
      { id: "actor11", name: "Huỳnh Hiểu Minh" },
      { id: "actor12", name: "Lý Tiểu Long" },
      { id: "actor13", name: "Dương Tử Quỳnh" },
      { id: "actor14", name: "Trương Quốc Vinh" },
      { id: "actor15", name: "Lý Liên Kiệt" },

      // Diễn viên nước ngoài
      { id: "actor16", name: "Leonardo DiCaprio" },
      { id: "actor17", name: "Robert Downey Jr." },
      { id: "actor18", name: "Scarlett Johansson" },
      { id: "actor19", name: "Tom Hanks" },
      { id: "actor20", name: "Meryl Streep" },
      { id: "actor21", name: "Brad Pitt" },
      { id: "actor22", name: "Angelina Jolie" },
      { id: "actor23", name: "Johnny Depp" },
      { id: "actor24", name: "Chris Hemsworth" },
      { id: "actor25", name: "Jennifer Lawrence" },
      { id: "actor26", name: "Morgan Freeman" },
      { id: "actor27", name: "Emma Stone" },
      { id: "actor28", name: "Will Smith" },
      { id: "actor29", name: "Natalie Portman" },
      { id: "actor30", name: "Denzel Washington" },
      { id: "actor31", name: "Hugh Jackman" },
      { id: "actor32", name: "Anne Hathaway" },
      { id: "actor33", name: "Tom Cruise" },
      { id: "actor34", name: "Julia Roberts" },
      { id: "actor35", name: "Keanu Reeves" },
      { id: "actor36", name: "Daniel Craig" },
      { id: "actor37", name: "Sandra Bullock" },
      { id: "actor38", name: "Ryan Reynolds" },
      { id: "actor39", name: "Christian Bale" },
      { id: "actor40", name: "Matthew McConaughey" },
    ];

    await queryInterface.bulkInsert("actors", actors, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("actors", null, {});
  },
};
