import { JwtPayload } from "jsonwebtoken";
import  jwt  from "jsonwebtoken";
import { StatusCodes } from "../features/entities/StatusCodes";
import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request{
  user?: JwtPayload;
}

export const authenticate = (req:AuthRequest, res: Response, next: NextFunction)=>{
  try{ 
  const decoded = (jwt.verify(req.cookies.accessToken, process.env.SECRET_KEY!)) as JwtPayload;
   req.user = decoded;
   next();
  }catch(err){
  return res.status(StatusCodes.UN_AUTHORIZED).json(err)
   }}

export const authorizate = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
      try{ 
  const decoded = (jwt.verify(req.cookies.accessToken, process.env.SECRET_KEY!)) as JwtPayload;
   if(decoded.user.role !== "ADMIN") throw new Error();
   next();
  }catch(err){
  return res.status(StatusCodes.FORBIDDEN).json({err: "access denied"})
   }}