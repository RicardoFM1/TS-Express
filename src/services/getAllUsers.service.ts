import { Repository } from "typeorm"
import { Usuarios } from "../entities/usuarios.entitie"
import { AppDataSource } from "../data-source"

export const getAllUsersService=async()=>{
    const usersRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUsers = await usersRepository.find()

    return findUsers

}