const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  getDashboard,
} = require("../controllers/adminController");

// =====================================
// Dashboard
// GET /api/admin/dashboard
// =====================================

router.get(
  "/dashboard",
  protect,
  adminOnly,
  getDashboard
);

module.exports = router;