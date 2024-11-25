"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
// get all products
router.get("/products", product_controller_1.getAllProducts);
// create a product
router.post("/products", product_controller_1.createProduct);
// update a product by id
router.put("/products/:id", product_controller_1.updateProduct);
// get a product by ID
router.get("/products/:id", product_controller_1.getProductById);
// delete a product by ID
router.delete("/products/:id", product_controller_1.deleteProduct);
exports.default = router;
