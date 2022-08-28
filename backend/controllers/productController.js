import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  //throw new Error("Some Error");
  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product Not Found" });
});

export { getProducts, getProduct };
