import { Repository } from "typeorm"
import { Usuarios } from "../entities/usuarios.entitie"
import { AppDataSource } from "../data-source"
import { returnUserSchema } from "../schemas/usuarios.schemas"
import { AppError } from "../errors"

export const getUserByIdService = async (userId:number)=>{

const usersRepository:Repository<Usuarios>=AppDataSource.getRepository(Usuarios)
const findUser = await usersRepository.findOne({
    where: {
        id: userId
    }
})
if(!findUser){
    throw new AppError("not found",404)
}
const user = returnUserSchema.parse(findUser)
return user
}