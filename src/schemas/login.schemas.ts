import {z} from "zod"

export const createLoginSchema = z.object({
    email: z.string().email("Email inválido!"),
    password: z.string().min(8, "Senha deve conter pelo menos 8 caracteres!")
})
