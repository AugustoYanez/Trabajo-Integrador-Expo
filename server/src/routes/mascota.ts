import { Router } from 'express'
import { authenticateToken } from '../middleware/validateToken'
import { darAdopcion } from '../controllers/masctoas.controllers'

const user = Router()

user.get('/adoptar',authenticateToken, darAdopcion)

export default user;