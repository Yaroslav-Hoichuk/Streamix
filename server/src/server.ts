import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./configs/cors-config/corsConfig";
import { prisma } from "../src/configs/prisma-config/prisma-adapter/prisma.js";
import { StatusCodes } from "./entities/StatusCodes";
import bcrypt from "bcrypt";
import cuid from "cuid";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { userRouter } from "./features/users/users.route";
import { movieRouter } from "./features/movies/movies.routes";
import { authRouter } from "./features/auth/auth.routes";

dotenv.config();
const PORT = process.env.PORT || "3200";
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
