import express from "express";
import productModel from "../models/productModel.js";

import {
  createProduct,
  updateProduct,
  deleteProduct,
  product,
  allProducts,
} from "../controllers/productController.js";

const router = express.Router();

// create new product
router.post("/", createProduct);

// update product
router.put("/:id", updateProduct);

// delete existing product
router.delete("/:id", deleteProduct);

// Get a specific product
router.get("/:id", product);

// Get all products
router.get("/", allProducts);

export default router;
