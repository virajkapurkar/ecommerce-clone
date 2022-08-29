import express from "express";
const router = express.Router();
import {
  authController,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authController);
router.route("/profile").get(protect, getUserProfile);
export default router;
