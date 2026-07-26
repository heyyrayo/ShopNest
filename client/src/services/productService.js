import api from "../api/api";

// Get all products
export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

// Get single product
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
};

// Create product (Admin)
export const createProduct = async (productData) => {
  const response = await api.post("/products", productData);
  return response.data;
};