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

dotenv.config();
const PORT = process.env.PORT || "3200";
const app = express();

interface AuthRequest extends Request {
  user?: JwtPayload;
}

interface IUser {
  email: string;
  name: string;
  age: number;
  password: string;
}


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const authenticate = (req:AuthRequest, res: Response, next: NextFunction)=>{
  try{ 
  const decoded = (jwt.verify(req.cookies.token, process.env.SECRET_KEY!)) as JwtPayload;
   req.user = decoded;
   next()}catch(err){
  return res.status(401).json(err)
   }}


app.get("/movies",authenticate ,async (req: Request, res: Response) => {
  try {
    let allMovies = await prisma.movie.findMany({
      select: {
        id: true,
        name: true,
        tags: true,
        ageBan: true,
        cinemaBanner: true,
        rating: {
          select: {
            value: true,
          },
        },
      },
    });

    let moviesData = allMovies.map((movie) => ({
      ...movie,
      rating:
        Math.round(
          (movie.rating.reduce((acc, curr) => acc + curr.value, 0) /
            movie.rating.length) *
            100,
        ) / 100,
    }));

    res.status(StatusCodes.OK).json(moviesData);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "failed fetch",
    });
  }
});

app.post("/auth/register", async (req: Request, res: Response) => {
  const userInfo: IUser = req.body;
  const newUser = await prisma.user.create({
    data: {
      email: userInfo.email,
      name: userInfo.name.length > 0 ? userInfo.name : `user+=${cuid()}`,
      age: userInfo.age,
      password: await bcrypt.hash(userInfo.password, process.env.SALT!),
    },
  });
  if (!newUser) res.status(StatusCodes.BAD_REQUEST).json("Bad Request");
  res.status(StatusCodes.CREATED).json(newUser);
});
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
