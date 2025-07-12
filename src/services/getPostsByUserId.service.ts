import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { iPosts, Post, returnAllPostsSchema } from "../schemas/posts.schemas";
import { Posts } from "../entities/posts.entitie";

export const getPostsByUserIdService=async(userId:number, offset:number|undefined,limit:number|undefined):Promise<iPosts>=>{
console.log(offset, limit, "Offset e limit no service")
    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPosts:Post[]|[] =await postRepository.find(
    {
        where:{
            usuario:{
                id:userId
            }
        },
        take:limit??10,
        skip:offset??0,
         relations:{
             usuario:true
                }
        

    }
    )
 
    const posts = returnAllPostsSchema.parse(findPosts)
    return posts

}