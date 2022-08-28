import express from "express";
const router = express.Router();
import { getProduct, getProducts } from "../controllers/productController.js";

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProduct);

export default router;
