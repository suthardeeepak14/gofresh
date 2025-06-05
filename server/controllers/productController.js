import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message : "Error fetching products", error: error.message });
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, price, image, inStock } = req.body;

    const product = new Product({
      name,
      price,
      image,
      inStock
    });
    const saveProduct = await product.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
}