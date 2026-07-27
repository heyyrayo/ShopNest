import api from "../api/api";

// ======================================
// Dashboard
// ======================================

export const getDashboard = async () => {
  const response = await api.get("/admin/dashboard");
  return response.data;
};

// ======================================
// Orders
// ======================================

export const getAllOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const updateOrderStatus = async (
  id,
  orderStatus
) => {
  const response = await api.put(
    `/orders/${id}/status`,
    {
      orderStatus,
    }
  );

  return response.data;
};

// ======================================
// Products
// ======================================

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(
    `/products/${id}`
  );

  return response.data;
};

export const createProduct = async (
  productData
) => {
  const response = await api.post(
    "/products",
    productData
  );

  return response.data;
};

export const updateProduct = async (
  id,
  productData
) => {
  const response = await api.put(
    `/products/${id}`,
    productData
  );

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(
    `/products/${id}`
  );

  return response.data;
};