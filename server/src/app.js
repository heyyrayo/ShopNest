const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

/* ---------------------------- Middleware ---------------------------- */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/* ------------------------------ Routes ------------------------------ */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to ShopNest API 🚀",
  });
});

app.use("/api/auth", authRoutes);

/* --------------------------- 404 Handler ---------------------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;