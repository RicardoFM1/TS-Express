import { Request, Response } from "express"
import { createUserService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"


export const createUserController = async(req:any,res:any):Promise<any> =>{
    const userData = req.body
    const user = await createUserService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:any,res:any):Promise<any>=>{
    const users = await getAllUsersService()
    return res.status(200).json(users)
}