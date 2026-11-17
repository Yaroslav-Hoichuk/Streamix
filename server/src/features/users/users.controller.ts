import { NextFunction, Request, response, Response } from "express";
import { prisma } from "../../configs/prisma-config/prisma-adapter/prisma";
import { StatusCodes } from "../entities/StatusCodes";
import { UserService } from "./users.service";
import { IUser } from "./user.entity";
import { AuthRequest } from "../../middlewares/auth.middleware";

export class UserController{
    constructor(private readonly UserService: UserService){}

    getAllUsers = async(req: Request, res: Response)=>{
        try {
            const response = await this.UserService.getAllUsers();
            if(!response) throw new Error();
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("fetch is failed")  
        }
    }
    getUserById = async(req: Request, res: Response)=>{
        try {
            const response = await this.UserService.getUserById(req.params.id as string);
            if(!response) throw new Error();
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("fetch is failed")  
    }
}
    editUserBySelf = async(req: AuthRequest, res: Response)=>{
        try {
            const userData: Partial<IUser> = req.body
            const response = await this.UserService.editUserBySelf(req.user!.id as string, userData);
            if(!response) throw new Error();
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("fetch is failed")  
        }
    }

}