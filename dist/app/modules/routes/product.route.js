"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller"); // Correctly import the functions
const router = express_1.default.Router();
// Route to create a product
router.post("/products", product_controller_1.createProduct);
router.put("/products/:id", product_controller_1.updateProduct);
// Route to get a product by ID
router.get("/products/:id", product_controller_1.getProductById);
router.delete("/products/:id", product_controller_1.deleteProduct);
exports.default = router;
