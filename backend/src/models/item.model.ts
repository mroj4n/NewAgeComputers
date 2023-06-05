import { Schema,model } from "mongoose";

export interface Item {
  id: string;
  name: string;
  price: number;
  specification: string[];
  tags: string[];
  imageUrl: string;
  sku: number;
  barcode: number;
  quantity: number;
  category: string;
}

export const ItemSchema = new Schema<Item>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    specification: { type: [String] },
    tags: { type: [String] },
    imageUrl: { type: String, required: true },
    sku: { type: Number },
    barcode: { type: Number },
    quantity: { type: Number },
    category: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const ItemModel = model<Item>("item", ItemSchema);
