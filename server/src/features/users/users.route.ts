import express from "express";
import { StatusCodes } from "../entities/StatusCodes";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { authenticate, authorizate } from "../../middlewares/auth.middleware";

export const userRouter = express.Router();
const userService = new UserService();
const userController = new UserController(userService);

userRouter.get("/", authorizate, userController.getAllUsers);
userRouter.get("/:id", authenticate, userController.getAllUsers);
userRouter.patch("/edit", authenticate, userController.editUserBySelf)

