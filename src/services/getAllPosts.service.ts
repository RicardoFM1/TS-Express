import { Repository } from "typeorm";
import { iPosts, returnAllPostsSchema } from "../schemas/posts.schemas";
import { Posts } from "../entities/posts.entitie";
import { AppDataSource } from "../data-source";

export const getAllPostsService=async(offset:number|undefined,limit:number|undefined):Promise<iPosts>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

const findOptions: any = {
  relations: { usuario: true }
};

if (limit !== undefined && offset !== undefined) {
  findOptions.take = limit;
  findOptions.skip = offset;
}

const findPosts = await postRepository.find(findOptions);
    const posts = returnAllPostsSchema.parse(findPosts)

    return posts

}