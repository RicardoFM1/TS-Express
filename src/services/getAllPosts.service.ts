import { Repository } from "typeorm";
import { iPosts, returnAllPostsSchema } from "../schemas/posts.schemas";
import { Posts } from "../entities/posts.entitie";
import { AppDataSource } from "../data-source";

export const getAllPostsService=async(offset:number|undefined,limit:number|undefined):Promise<iPosts>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)


const findPosts:Posts[]|[] = await postRepository.find({
  take:limit??10,
  skip:offset??0,
  relations:{
    usuario:true
  }
});
    const posts = returnAllPostsSchema.parse(findPosts)

    return posts

}