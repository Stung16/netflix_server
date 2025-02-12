"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const contentWarnings = [
      { id: "warring1", content: "Lạm dụng trẻ em" },
      { id: "warring2", content: "Ngược đãi gia đình" },
      { id: "warring3", content: "Bạo lực" },
      { id: "warring4", content: "Ngôn ngữ thô tục" },
      { id: "warring5", content: "Sử dụng chất kích thích" },
      { id: "warring6", content: "Hình ảnh nhạy cảm" },
      { id: "warring7", content: "Tự sát" },
      { id: "warring8", content: "Phân biệt đối xử" },
      { id: "warring9", content: "Chấn thương tâm lý" },
      { id: "warring10", content: "Hành vi phạm pháp" },
      { id: "warring11", content: "Sợ hãi" },
      { id: "warring12", content: "Bắt nạt" },
      { id: "warring13", content: "Môi trường nguy hiểm" },
      { id: "warring14", content: "Đổ máu" },
      { id: "warring15", content: "Bệnh tật" },
    ];
    await queryInterface.bulkInsert("contentWarnings", contentWarnings, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contentWarnings", null, {});
  },
};
