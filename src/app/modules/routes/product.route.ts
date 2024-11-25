import express from "express";
import {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/product.controller";

const router = express.Router();

// get all products
router.get("/products", getAllProducts);

// create a product
router.post("/products", createProduct);

// update a product by id
router.put("/products/:id", updateProduct);

// get a product by ID
router.get("/products/:id", getProductById);

// delete a product by ID
router.delete("/products/:id", deleteProduct);

export default router;
