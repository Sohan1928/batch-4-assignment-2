import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./app/modules/routes/product.route";
import orderRoutes from "./app/modules/routes/order.route";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./app/config";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

mongoose
  .connect(config.database_url || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developer!");
});

export default app;
