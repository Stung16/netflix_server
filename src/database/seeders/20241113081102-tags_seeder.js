"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tags = [
      { id: "tag1", name: "Tâm lý" },
      { id: "tag2", name: "Giật gân" },
      { id: "tag3", name: "Hành động" },
      { id: "tag4", name: "Kinh dị" },
      { id: "tag5", name: "Phiêu lưu" },
      { id: "tag6", name: "Hài hước" },
      { id: "tag7", name: "Lãng mạn" },
      { id: "tag8", name: "Khoa học viễn tưởng" },
      { id: "tag9", name: "Gia đình" },
      { id: "tag10", name: "Hình sự" },
      { id: "tag11", name: "Bí ẩn" },
      { id: "tag12", name: "Thể thao" },
      { id: "tag13", name: "Âm nhạc" },
      { id: "tag14", name: "Chiến tranh" },
      { id: "tag15", name: "Viễn Tây" },
      { id: "tag16", name: "Lịch sử" },
      { id: "tag17", name: "Kịch tính" },
      { id: "tag18", name: "Hoạt hình" },
      { id: "tag19", name: "Phiêu lưu mạo hiểm" },
      { id: "tag20", name: "Lịch sử" },
    ];
    await queryInterface.bulkInsert("tags", tags, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
