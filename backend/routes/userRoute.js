import express from "express";
const router = express.Router();
import { authController } from "../controllers/userController.js";

router.post("/login", authController);
export default router;
