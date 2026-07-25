const dns = require("dns");

// Force Node.js to use Cloudflare DNS instead of the broken local resolver
dns.setServers(["1.1.1.1", "1.0.0.1"]);

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`
=========================================
✅ MongoDB Connected Successfully
🚀 ShopNest Server Started
🌐 http://localhost:${PORT}
=========================================
`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();