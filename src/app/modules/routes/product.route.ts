import express from "express";
import {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller"; // Correctly import the functions

const router = express.Router();

// Route to create a product
router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

// Route to get a product by ID
router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProduct);

export default router;
