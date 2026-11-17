import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../configs/prisma-config/prisma-adapter/prisma";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { IloginData } from "./auth.entity";
import { IUser } from "../users/user.entity";
import bcrypt from "bcrypt"
export class AuthService{
    authMe = async(userInfo: JwtPayload)=>{
        return await prisma.user.findUnique({
            where:{
                id: userInfo.id
            },
            omit: {
                password: true
            }
        });
    }
    login = async(loginData: IloginData)=>{
        return await prisma.user.findUnique({
            where:{
                email: loginData.email,
            }
        })
    }

    register = async(userData: IloginData & IUser)=>{
        return await prisma.user.create({
            data: {
                ...userData,
                password: await bcrypt.hash(userData.password, 8)
            }
        })
    }
}