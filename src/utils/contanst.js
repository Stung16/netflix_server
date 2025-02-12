const { v4: uuidv4 } = require("uuid");
const dayjs = require("dayjs");
module.exports = {
  generateId: () => {
    return uuidv4();
  },
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      // Chọn ngẫu nhiên một chỉ số từ 0 đến i
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Hoán đổi phần tử tại i và randomIndex
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  },
  getEpisodeIds: (data) => {
    const episodeIds = [];

    // Duyệt qua các season
    if (Array.isArray(data.seasons)) {
      for (const season of data.seasons) {
        // Duyệt qua các episode trong season
        if (Array.isArray(season.episodes)) {
          for (const episode of season.episodes) {
            if (episode.id) {
              episodeIds.push(episode.id);
            }
          }
        }
      }
    }

    return episodeIds;
  },
  validateMail: (email) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    // Test the email against the regex
    return emailRegex.test(email);
  },
  ListServicePay: {
    Classic: "60000",
    Premium: "3000000",
    Standard: "150000",
  },
  getCurrentFormattedDate: () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },
  checkExpriedTranSaction: (date) => {
    const now = dayjs();
    const inputTime = dayjs(date);
    return now.diff(inputTime, "month") === 1;
  },
  ListNameGenre_vi: {
    genres2: [
      "Chương trình truyền hình lãng mạn Hàn Quốc",
      "Chương trình truyền hình Âu – Mỹ",
      "Phim & chương trình truyền hình lồng tiếng Việt",
      "Chương trình truyền hình Mỹ",
      "Phim chính kịch Hàn Quốc",
      "Được đám đông yêu thích",
    ],
    genres3: [
      "Phim Thái",
      "Phim giật gân",
      "Phim lý thú",
      "Phim hành động",
      "Phim gia đình & trẻ em",
      "Lựa chọn hàng đầu của bạn hôm nay",
    ],
    genres4: [
      "Phim mới trên Netflix",
      "Ra mắt tuần này",
      "Đáng chờ đợi",
      "Ra mắt tuần tới",
      "Top 10 phim tại Việt Nam hôm nay",
      "Top 10 chương trình truyền hình tại Việt Nam hôm nay",
    ],
  },
  ListNameGenre_en: {
    genres2: [
      "Korean Romantic TV Shows",
      "European – American TV Shows",
      "Movies & Dubbed TV Shows in Vietnamese",
      "American TV Shows",
      "Korean Dramas",
      "Crowd Favorites",
    ],
    genres3: [
      "Thai Movies",
      "Thrillers",
      "Intriguing Movies",
      "Action Movies",
      "Family & Kids Movies",
      "Today's Top Picks",
    ],
    genres4: [
      "New Movies on Netflix",
      "Releasing This Week",
      "Highly Anticipated",
      "Releasing Next Week",
      "Top 10 Movies in Vietnam Today",
      "Top 10 TV Shows in Vietnam Today",
    ],
  },
};
