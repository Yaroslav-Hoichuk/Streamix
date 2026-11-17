import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const authRouter = express.Router();

const authService = new AuthService(); 
const authController = new AuthController(authService);

authRouter.get("/me", authenticate, authController.authMe)
authRouter.post("/login", authController.login)
authRouter.post("/register", authController.register)

