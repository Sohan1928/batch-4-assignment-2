import { Request, Response } from "express";
import Product from "../models/product.model";

// Controller function to create a product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: "Product created successfully",
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create product",
      success: false,
      error: error.message,
    });
  }
};

export const updateProduct: any = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get product ID from params
    const updateData = req.body; // Get the updated data from the request body

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Run validation for the updated data
    });

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      success: true,
      data: updatedProduct,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to update product",
      success: false,
      error: error.message,
    });
  }
};

// Add other controller functions, like getting a product by ID
export const getProductById: any = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Product found successfully",
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch product",
      success: false,
      error: error.message,
    });
  }
};

export const deleteProduct: any = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get product ID from the URL params

    // Attempt to find and delete the product by ID
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to delete product",
      success: false,
      error: error.message,
    });
  }
};
