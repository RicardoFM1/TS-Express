import {z} from "zod"

export const createUserSchema = z.object({
    name: z.string().min(2,"nome é obrigatório"),
    email: z.string().email(),
    password: z.string()
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({password:true})