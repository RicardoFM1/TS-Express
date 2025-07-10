import { Repository } from "typeorm"
import { Comments } from "../entities/comments.entitie"
import { AppDataSource } from "../data-source"
import { returnAllCommentSchema } from "../schemas/comments.schemas"

export const getCommentsByIdPostService=async(userId:number)=>{

    const commentRepository:Repository<Comments> = AppDataSource.getRepository(Comments)

    const findComments:Comments[]|[] =await commentRepository.find(
    {
        where:{
            usuario:{
                id:userId
            }
        },
        relations:{
            post:true,
            usuario:true
        }
    }
    )
    console.log(findComments,"aki")
    const posts = returnAllCommentSchema.parse(findComments)
    return posts

}