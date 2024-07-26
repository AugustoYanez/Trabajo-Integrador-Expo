import { Router } from 'express'
import { authenticateToken } from '../middleware/validateToken'
import { addMascota, perfil } from '../controllers/user.controllers'

const user = Router()


user.post('/', authenticateToken, addMascota)





user.get('/perfil', authenticateToken, perfil)





export default user;