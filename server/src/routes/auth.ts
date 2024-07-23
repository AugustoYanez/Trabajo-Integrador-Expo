import validate from "../middleware/validateSchema"
import { Router } from 'express'
import { login, register } from '../controllers/auth.controllers'
import { loginSchema, registerSchema } from '../schema/auth.schema'


const auth = Router()



auth.get('/perfil', (req, res) => {
    console.log("oer")
});


auth.post('/login', validate(loginSchema), login)
auth.post('/register', validate(registerSchema), register)

export default auth;