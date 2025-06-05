import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  image: {
    type: String,
    required: [true, "Product image is required"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
},
  { timestamps: true, }
);

const Product = mongoose.model("Product", productSchema);

export default Product;