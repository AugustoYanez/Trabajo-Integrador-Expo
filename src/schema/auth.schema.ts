import {z} from 'zod'

export const loginoSchema = z.object({
    body: z.object({
        nombre: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
    })
})