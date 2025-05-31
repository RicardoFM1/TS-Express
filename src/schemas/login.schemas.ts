import {z} from "zod"

export const createLoginSchema = z.object({
    email: z.string(),
    password: z.number()
})
