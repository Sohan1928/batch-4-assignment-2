import { Request, Response } from "express";
import Product from "../models/product.model";
import Order from "../models/order.model";

// create an order
export const createOrder: any = async (req: Request, res: Response) => {
  try {
    const { product, quantity, email } = req.body;

    const productData = await Product.findById(product);
    if (!productData) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    if (productData.quantity < quantity) {
      return res.status(400).json({
        message: "Stock not available",
        success: false,
      });
    }

    const totalPrice = productData.price * quantity;
    const order = await Order.create({ email, product, quantity, totalPrice });

    productData.quantity -= quantity;
    productData.inStock = productData.quantity > 0;
    await productData.save();

    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: order,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create order",
      success: false,
      error: error.message,
    });
  }
};

// get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      message: "Order list show successfully",
      success: true,
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch orders",
      success: false,
      error: error.message,
    });
  }
};

// calculate total revenue from all orders
export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    const totalRevenue = orders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );

    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      revenue: totalRevenue,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to calculate revenue",
      success: false,
      error: error.message,
    });
  }
};
