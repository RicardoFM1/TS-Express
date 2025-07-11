import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Posts } from "../entities/posts.entitie"



export const deletePostsbyIdService=async(postId:number, userId:number)=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)
    console.log(postRepository)
    const findPosts = await postRepository.findOne({
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
        throw new Error("Post não encontrado")
    } 
    if(findPosts.usuario && findPosts.usuario.id !== userId){
        return { message: "Usuário não autorizado a deletar este post"}
    }
    await postRepository.delete(postId)
    console.log("postId:", postId, "userId:", userId);
    return { message: "Post deletado com sucesso" }
    
}