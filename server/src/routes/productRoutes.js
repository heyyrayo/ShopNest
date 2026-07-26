const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

// Create Product
router.post("/", createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Single Product
router.get("/:id", getProductById);

module.exports = router;