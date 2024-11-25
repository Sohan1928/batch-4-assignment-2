import { Request, Response } from "express";
import Product from "../models/product.model";

// get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "All Products fetched successfully",
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch products",
      success: false,
      error: error.message,
    });
  }
};

// create product
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

// update product by id
export const updateProduct: any = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
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

// get product by id
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

// delete product by id
export const deleteProduct: any = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

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
