import express from "express";
import { addOrderItem } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//create new order
router.route("/").post(protect, addOrderItem);

export default router;
