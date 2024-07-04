import validate from "../middleware/validateSchema"
import { Router } from 'express'
import { login, register, logout } from '../controllers/auth.controllers'
import { loginSchema, registerSchema } from '../schema/auth.schema'


const auth = Router()

auth.post('/login', validate(loginSchema), login)
auth.post('/register', validate(registerSchema), register)
auth.get('/logout', logout)

export default auth;