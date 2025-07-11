import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController, getAllPostsController, getPostsByUserIdController } from "../controllers/posts.controllers";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";
import { createCommentSchema } from "../schemas/comments.schemas";
import { createCommentController, getCommentsByPostIdController } from "../controllers/comment.controllers";
import { getAllPostsService } from "../services/getAllPosts.service";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema), validateTokenMiddleware,createPostController)
postsRoutes.patch("/:id",validateTokenMiddleware)
postsRoutes.delete("/:id",validateTokenMiddleware, )
postsRoutes.get("/user/:userid", getPostsByUserIdController)
postsRoutes.get("/:id")
postsRoutes.get("",getAllPostsController)

postsRoutes.get("/comment/:id",getCommentsByPostIdController)
postsRoutes.post("/comment/:id",validateTokenMiddleware,validateDataMiddleware(createCommentSchema),createCommentController)