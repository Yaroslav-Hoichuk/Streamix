import { AuthService } from "./auth.service";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "../entities/StatusCodes";
import { Response, Request } from "express";
import { IloginData } from "./auth.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { IUser } from "../users/user.entity";
import { prisma } from "../../configs/prisma-config/prisma-adapter/prisma";
export class AuthController{
    constructor(private readonly AuthService: AuthService){}

    authMe = async(req: AuthRequest, res: Response)=>{
        try {
            const response = await this.AuthService.authMe(req.user as JwtPayload);
            if(!response) return res.status(StatusCodes.UN_AUTHORIZED).json({err: "no token"});
            return res.status(StatusCodes.OK).json(response);
        }catch (error) {
            return res.status(StatusCodes.UN_AUTHORIZED).json(error);
        }
    }

    register = async(req: Request, res: Response)=>{
        try {
            const userData: IUser & IloginData = req.body;
            const response = await this.AuthService.register(userData);
            if(!response) throw new Error()
            return res.status(StatusCodes.CREATED).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        }
    }

    login = async(req: Request, res: Response)=>{
        try {
            const userData:IloginData = req.body;
            if (!userData.password || !userData.email) return res.status(StatusCodes.BAD_REQUEST).json({ mess: "email or password field is empty" });
            const response = await this.AuthService.login(userData);
            if (!response) return res.status(StatusCodes.BAD_REQUEST).json("wrong email or password");
            const comparePasswords = await bcrypt.compare(userData.password, response.password);
            if (!comparePasswords) return res.status(StatusCodes.BAD_REQUEST).json("wrong pass");
            const { password, ...userWithoutPass } = response;
            const token = jwt.sign(
                userWithoutPass , 
                process.env.SECRET_KEY!,
                {expiresIn: "10m"}
            );

            res.cookie("accessToken", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
            path: "/",
            });
            return res.status(StatusCodes.OK).json({ user: userWithoutPass});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: error });
        }
    };
}