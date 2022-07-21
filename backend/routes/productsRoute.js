import express from "express";
const router = express.Router();
import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product Not Found" });
  })
);

export default router;
