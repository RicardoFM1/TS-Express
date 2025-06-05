import { Request, Response } from "express";
import { CreatePost, iPosts, Post } from "../schemas/posts.schemas";
import { createPostService } from "../services/createPost.service";
import { getAllPostsService } from "../services/getAllPosts.service";

export const createPostController=async(req:Request,res:Response):Promise<Response>=>{

    const postData:CreatePost = req.body
    
    const userId = req.user.id
    const post: Post = await createPostService(postData,userId)

    return res.status(201).json(post)

}
export const getAllPostsController=async(req:Request,res:Response):Promise<Response>=>{
    const offset = req.query.offset
    const limit = req.query.limit
    console.log(req.baseUrl,req.hostname)
    const posts:iPosts = await getAllPostsService(offset,limit)
    return res.status(200).json(posts)
}