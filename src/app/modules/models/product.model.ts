import mongoose, { Schema, Document } from "mongoose";

enum Category {
  Writing = "Writing",
  OfficeSupplies = "Office Supplies",
  ArtSupplies = "Art Supplies",
  Educational = "Educational",
  Technology = "Technology",
}

interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, enum: Object.values(Category), required: true },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
