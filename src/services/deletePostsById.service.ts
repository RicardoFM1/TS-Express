import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { returnAllCommentSchema } from "../schemas/comments.schemas"
import { Posts } from "../entities/posts.entitie"
import { Post } from "../schemas/posts.schemas"

export const deletePostsbyIdService=async(postId:number)=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPosts:Post[]|[] = await postRepository.find(
    {
        where:{
        id: postId
        }   
        
        
    }
    )
    const posts = returnAllCommentSchema.parse(findPosts)
    return posts

}