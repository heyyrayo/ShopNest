const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
});
    console.log(`
=========================================
✅ MongoDB Connected Successfully
📦 Database : ${connection.connection.name}
🖥️ Host     : ${connection.connection.host}
=========================================
`);
  } catch (error) {
  console.error("❌ MongoDB Connection Failed");
  console.error(error);
  process.exit(1);
}
};

module.exports = connectDB;