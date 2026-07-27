const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

// ======================================
// Customer Routes
// ======================================

router.post("/", protect, createOrder);

router.get("/my", protect, getMyOrders);

// ======================================
// Admin Routes
// ======================================

router.get("/", protect, adminOnly, getAllOrders);

router.get("/:id", protect, adminOnly, getOrderById);

router.put(
  "/:id/status",
  protect,
  adminOnly,
  updateOrderStatus
);

module.exports = router;