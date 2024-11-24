import mongoose, { Schema, Document } from "mongoose";

interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const orderSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", orderSchema);
