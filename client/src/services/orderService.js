import api from "../api/api";

// ======================================
// Create Order
// POST /api/orders
// ======================================

export const createOrder = async (orderData) => {
  const response = await api.post(
    "/orders",
    orderData
  );

  return response.data;
};