const Order = require("../models/Order");

const getDashboard = async (req, res) => {
  try {
    const orders = await Order.find();

    const totalOrders = orders.length;

    const totalRevenue = orders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );

    const pendingOrders = orders.filter(
      (order) => order.orderStatus === "Pending"
    ).length;

    const deliveredOrders = orders.filter(
      (order) => order.orderStatus === "Delivered"
    ).length;

    res.status(200).json({
      success: true,
      dashboard: {
        totalOrders,
        totalRevenue,
        pendingOrders,
        deliveredOrders,
      },
    });
  } catch (error) {
    console.error("========== DASHBOARD ERROR ==========");
    console.error(error);
    console.error("=====================================");

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};