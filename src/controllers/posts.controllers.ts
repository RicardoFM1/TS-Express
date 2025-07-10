import { Request, Response } from "express";
import { CreatePost, iPosts, Post } from "../schemas/posts.schemas";
import { createPostService } from "../services/createPost.service";
import { getAllPostsService } from "../services/getAllPosts.service";
import { getPostsByUserIdService } from "../services/getPostsByUserId.service";

export const createPostController=async(req:Request,res:Response):Promise<Response>=>{

    const postData:CreatePost = req.body
    
    const userId = req.user.id
    const post: Post = await createPostService(postData,userId)

    return res.status(201).json(post)

}
export const getAllPostsController=async(req:Request,res:Response):Promise<Response>=>{
const limitParam = req.query.limit;
const offsetParam = req.query.offset;

const limit = typeof limitParam === "string" ? parseInt(limitParam) : undefined;
const offset = typeof offsetParam === "string" ? parseInt(offsetParam) : undefined;
    console.log(req.baseUrl,req.hostname)
    const posts:iPosts = await getAllPostsService(offset,limit)
    return res.status(200).json(posts)
}
export const getPostsByUserIdController=async(req:Request,res:Response):Promise<Response>=>{
    const userId:number = parseInt(req.params.userid)
        const posts:iPosts = await getPostsByUserIdService(userId)
    return res.status(200).json(posts)
}