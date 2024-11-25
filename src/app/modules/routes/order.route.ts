import express from "express";
import {
  createOrder,
  calculateRevenue,
  getAllOrders,
} from "../controllers/order.controller";

const router = express.Router();

// get all orders
router.get("/orders", getAllOrders);

// create an order
router.post("/orders", createOrder);

// calculate total revenue
router.get("/revenue", calculateRevenue);

export default router;
