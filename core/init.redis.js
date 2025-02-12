const Redis = require("ioredis");

class RedisClient {
  constructor() {
    this.client = null;
  }

  // Hàm mở kết nối
  connect() {
    if (!this.client) {
      this.client = new Redis({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
      });

      this.client.on("connect", () =>
        console.log("Redis Client connect success")
      );
      this.client.on("error", (err) => console.log("Redis Client Error", err));
    }
    return this.client;
  }

  // Hàm đóng kết nối
  disconnect() {
    if (this.client) {
      this.client.disconnect();
      console.log("Redis Client disconnected");
      this.client = null;
    }
  }
}

module.exports = new RedisClient();
