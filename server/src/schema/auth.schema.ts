import { z } from 'zod'

export const loginSchema = z.object({
    body: z.object({
        nombre: z.string({
            required_error: "El campo nombre, es requerido.",
        }).min(4, {message: "Tiene que tener mas de 4 caracteres."}),
        contraseña: z.string().min(8, { message: "Tiene que tener mas de 8 caracteres." }),
    })
})

export const registerSchema = z.object({
    body: z.object({
        nombre: z.string({
            required_error: "El campo nombre, es requerido.",
        }).min(4, {message: "Tiene que tener mas de 4 caracteres."}),
        email: z.string().email({ message: "Ingrese un email valido." }),
        contraseña: z.string().min(8, { message: "Tiene que tener mas de 8 caracteres." }),
    })
})