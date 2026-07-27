const Order = require("../models/Order");

// =============================
// Create Order
// POST /api/orders
// Private
// =============================

const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No order items found.",
      });
    }

    const order = await Order.create({
      user: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order,
    });

  } catch (error) {
    console.error("========== ORDER ERROR ==========");
    console.error(error);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createOrder,
};