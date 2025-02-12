"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const genres = [
      {
        id: "genres1",
        name: "Anime",
      },
      {
        id: "genres2",
        name: "Châu Á",
      },
      {
        id: "genres3",
        name: "Giả tưởng",
      },
      {
        id: "genres4",
        name: "Giành giải thưởng",
      },
      {
        id: "genres5",
        name: "Giật gân",
      },
      {
        id: "genres6",
        name: "Hài",
      },
      {
        id: "genres7",
        name: "Hành động",
      },
      {
        id: "genres8",
        name: "Hollywood",
      },
      {
        id: "genres9",
        name: "Khoa học viễn tưởng",
      },
      {
        id: "genres10",
        name: "Kinh dị",
      },
      {
        id: "genres11",
        name: "Kinh điển",
      },
      {
        id: "genres12",
        name: "Kỳ nghỉ lễ",
      },
      {
        id: "genres13",
        name: "Lãng mạn",
      },
      {
        id: "genres14",
        name: "Phim âm nhạc & nhạc kịch",
      },
      {
        id: "genres15",
        name: "Phim chính kịch",
      },
      {
        id: "genres16",
        name: "Phim độc lập",
      },
      {
        id: "genres17",
        name: "Phim ngắn",
      },
      {
        id: "genres18",
        name: "Phim tài liệu",
      },
      {
        id: "genres19",
        name: "Phim Việt Nam",
      },
      {
        id: "genres20",
        name: "Quốc tế",
      },
      {
        id: "genres21",
        name: "Thể thao",
      },
      {
        id: "genres22",
        name: "Tội phạm",
      },
      {
        id: "genres23",
        name: "Trẻ em và gia đình",
      },
    ];

    await queryInterface.bulkInsert("genres", genres, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres", null, {});
  },
};
