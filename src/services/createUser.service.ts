import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Usuarios } from "../entities/usuarios.entitie"
import { returnUserSchema } from "../schemas/usuarios.schemas"

export const createUserService=async(userData:any)=>{
    const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)


    const user = returnUserSchema.parse(createUser)
    return user

}