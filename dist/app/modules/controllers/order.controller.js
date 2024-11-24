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
exports.createOrder = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product, quantity, email } = req.body;
        const productData = yield product_model_1.default.findById(product);
        if (!productData) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }
        if (productData.quantity < quantity) {
            return res.status(400).json({
                message: "Insufficient stock",
                success: false,
            });
        }
        const totalPrice = productData.price * quantity;
        const order = yield order_model_1.default.create({ email, product, quantity, totalPrice });
        productData.quantity -= quantity;
        productData.inStock = productData.quantity > 0;
        yield productData.save();
        res.status(201).json({
            message: "Order created successfully",
            success: true,
            data: order,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create order",
            success: false,
            error: error.message,
        });
    }
});
exports.createOrder = createOrder;
// Add function for calculateRevenue