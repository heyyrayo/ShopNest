const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createOrder,
} = require("../controllers/orderController");

// ======================================
// Create Order
// POST /api/orders
// Private Route
// ======================================

router.post("/", protect, createOrder);

module.exports = router;