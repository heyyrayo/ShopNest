const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
} = require("../controllers/orderController");

// ======================================
// POST /api/orders
// Create Order
// ======================================

router.post("/", protect, createOrder);

// ======================================
// GET /api/orders/my
// Get Logged-in User Orders
// ======================================

router.get("/my", protect, getMyOrders);

module.exports = router;