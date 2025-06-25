import {z} from "zod"
import { returnUserSchema } from "./usuarios.schemas"

export const createLoginSchema = z.object({
    email: z.string().email(),
    password:z.string()
})
export const returnLoginSchema = z.object({
    usuario:returnUserSchema,
    token:z.string()
})

export type iCreateLogin = z.infer<typeof createLoginSchema>
export type iRetunrLogin = z.infer<typeof returnLoginSchema>