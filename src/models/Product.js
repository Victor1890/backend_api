import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    description: String,
    price: Number,
    stock: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model("Product", productSchema);
