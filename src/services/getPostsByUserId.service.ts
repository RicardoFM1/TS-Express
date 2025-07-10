import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { iPosts, Post, returnAllPostsSchema } from "../schemas/posts.schemas";
import { Posts } from "../entities/posts.entitie";

export const getPostsByUserIdService=async(userId:number):Promise<iPosts>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPosts:Post[]|[] =await postRepository.find(
    {
        where:{
            usuario:{
                id:userId
            }
        },
        relations:{
            usuario:true
        }
    }
    )
    console.log(findPosts,"aki")
    const posts = returnAllPostsSchema.parse(findPosts)
    return posts

}