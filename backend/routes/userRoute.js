import express from "express";
const router = express.Router();
import {
  authController,
  getUserProfile,
  registerUser,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//Route : POST register new user
router.route("/").post(registerUser);
//Route : POST login request
router.post("/login", authController);
//Protected Route : GET User profile
router.route("/profile").get(protect, getUserProfile).put(protect, updateUser);

export default router;
