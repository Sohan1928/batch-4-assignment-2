import express from "express";
import {
  createOrder,
  calculateRevenue,
  getAllOrders,
} from "../controllers/order.controller";

const router = express.Router();

// Route to get all orders
router.get("/orders", getAllOrders);

// Route to create an order
router.post("/orders", createOrder);

// Route to calculate total revenue
router.get("/revenue", calculateRevenue);

export default router;
