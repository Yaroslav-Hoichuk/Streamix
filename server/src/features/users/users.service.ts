import { NextFunction, Request, Response } from "express";
import { prisma } from "../../configs/prisma-config/prisma-adapter/prisma"
import { StatusCodes } from "../entities/StatusCodes";
import { IUser } from "./user.entity";

export class UserService{
    getAllUsers = async()=>{
        return await prisma.user.findMany({omit:{
            password: true
        }});
    }
    getUserById = async(userId: string)=>{
        return await prisma.user.findUnique({
            where:{
                id: userId
            },
            omit:{
                password: true
            }
        })
    }
    editUserBySelf = async(userId: string, userData: Partial<IUser>)=>{
        return await prisma.user.update({
            where:{
                id: userId 
            },
            data:{
                ...userData
            }
        })
    }
}