"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProductById = exports.updateProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
// Controller function to create a product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.create(req.body);
        res.status(201).json({
            message: "Product created successfully",
            success: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Failed to create product",
            success: false,
            error: error.message,
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Get product ID from params
        const updateData = req.body; // Get the updated data from the request body
        const updatedProduct = yield product_model_1.default.findByIdAndUpdate(id, updateData, {
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update product",
            success: false,
            error: error.message,
        });
    }
});
exports.updateProduct = updateProduct;
// Add other controller functions, like getting a product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_model_1.default.findById(id);
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch product",
            success: false,
            error: error.message,
        });
    }
});
exports.getProductById = getProductById;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Get product ID from the URL params
        // Attempt to find and delete the product by ID
        const product = yield product_model_1.default.findByIdAndDelete(id);
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
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete product",
            success: false,
            error: error.message,
        });
    }
});
exports.deleteProduct = deleteProduct;
