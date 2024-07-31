import { Router } from 'express'
import { authenticateToken } from '../middleware/validateToken'
import validate from '../middleware/validateSchema'
import { addMascota, eliminarMascota, perfil, traerMascota, traerMascotas } from '../controllers/user.controllers'
import { registerMascota } from '../schema/mascota.schema'
import { idSchema } from '../schema/params.schema'

const user = Router()

user.get('/perfil', authenticateToken, perfil)
user.get('/mascotas', authenticateToken, traerMascotas)
user.get('/mascotas/:id', authenticateToken, validate(idSchema), traerMascota)
user.post('/mascotas', authenticateToken, addMascota)

export default user;