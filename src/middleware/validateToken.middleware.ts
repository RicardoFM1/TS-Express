
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const validateTokenMiddleware = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    let token = req.headers.authorization
    if(!token){
        throw new AppError("Necessita autorização",401)
    }

    token = token.split(" ")[1]
    jwt.verify(token,process.env.SECRET_KEY!,async(error,decoded:any)=>{
        if(error){
            return res.status(401).json({message:error.message})
        }
        if(decoded){
            req.user = {
            id :  decoded.id,
            email:decoded.email
        }
       
        }
        
    })
     next()

}
// import jwt from "jsonwebtoken"
// import { NextFunction, Request, Response } from "express";
// import { Schema, ZodTypeAny } from "zod";
// //import { Usuarios } from "../entities/usuarios.entitie";
// //import { Repository } from "typeorm";
// //import { AppDataSource } from "../data-source";

// export const validateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     if(!req.headers.authorization){
//         return res.status(400).json({mensage:"Necessita autenticação"})
//     }
//     const token = req.headers.authorization.split(" ")[1]
//     jwt.verify(token,process.env.secret_key!,async(erro,decoded:any) =>{
//         if(erro){
//             return res.status(401).json({mensage:erro.message})
//         }
//         if(decoded){
//             // const userRepository:Repository<Usuarios>=AppDataSource.getRepository(Usuarios)
//             // const findUser:Usuarios|null=await userRepository.findOne({
//             //     where:{
//             //         id:decoded.id
//             //     }
//             // })
//             req.user = {
//                 email:decoded.email!,
//                 id: decoded.id!
//             }
//         }
//     })
//     next()
// }