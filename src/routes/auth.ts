import { Router } from 'express'
import { login, register, logout } from '../controllers/auth.controllers'


const auth = Router()

auth.post('/login', login)
auth.post('/register', register)
auth.get('/logout', logout)

export default auth;