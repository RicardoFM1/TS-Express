import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Posts } from "../entities/posts.entitie"
import { AppError } from "../errors"



export const deletePostsbyIdService=async(postId:number, userId:number):Promise<void>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)
    console.log(postRepository)
    const findPosts:Posts|null = await postRepository.findOne({
     where: {
        id: postId,
        usuario: {
            id: userId
        }
     },
    
     relations: {
        usuario: true
     }
    })
    if(!findPosts){
        throw new AppError("Post não encontrado")
    } 
    // if(findPosts.usuario && findPosts.usuario.id !== userId){
    //     throw new AppError("Usuário não autorizado a deletar este post", 403)
    //    // return { message: "Usuário não autorizado a deletar este post"}
    // }
    await postRepository.delete(postId)
    console.log("postId:", postId, "userId:", userId);
    // return { message: "Post deletado com sucesso" }
    
}