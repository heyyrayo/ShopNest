import api from "../api/api";

// ======================================
// Create Order
// ======================================

export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);

  return response.data;
};

// ======================================
// Get Logged-in User Orders
// ======================================

export const getMyOrders = async () => {
  const response = await api.get("/orders/my");

  return response.data;
};