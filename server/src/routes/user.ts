import { Router } from 'express'
import { authenticateToken } from '../middleware/validateToken'
import { perfil } from '../controllers/user.controllers'

const user = Router()

user.get('/perfil', authenticateToken, perfil)
user.get('/mascotas', authenticateToken,)
user.post('/mascosta', authenticateToken,)

export default user;