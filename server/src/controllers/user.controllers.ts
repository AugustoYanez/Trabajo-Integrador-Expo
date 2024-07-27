import { Request as IReq, Response as IRes } from 'express';
import { CustomRequest, Payload } from '../middleware/validateToken';
import { Usuario } from '../models/auth.models';
import { IMascota } from '../interfaces/Mascota';
import { Mascota } from '../models/auth.models';

export const perfil = async (req: IReq, res: IRes) => {
    try {
        const { email } = (req as CustomRequest).payload as Payload;

        // Encuentra al usuario y puebla las mascotas
        const found = await Usuario.findOne({ email }).populate('mascotas').exec();

        if (!found) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }

        res.status(200).json(found);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el perfil' });
    }
}

// POST MASCOTA
export const addMascota = async (req: IReq, res: IRes) => {  
    try {  
        const {  
            placaID, nombre, apodo, estado, edad, descripcion, imagen, caracteristicas  
        }: IMascota = req.body;  

        // Verificación de campos requeridos  
        if (!placaID || !nombre || !apodo || !estado || !edad || !descripcion || !imagen || !caracteristicas) {  
            res.status(400).json({ error: 'Faltan campos requeridos' });  
            return;  
        }  

        const { email } = (req as CustomRequest).payload as Payload;  
        const usuario = await Usuario.findOne({ email }).populate('mascotas'); // Asegúrate de que las mascotas estén pobladas  

        if (!usuario) {  
            res.status(404).json({ error: 'Usuario no encontrado' });  
            return;  
        }  

        // Comprobar si la mascota ya existe
        const mascotasPobladas = await Mascota.find({ _id: { $in: usuario.mascotas } });

        const mascotaExistente = mascotasPobladas.find(mascota =>   
            mascota.placaID === placaID || mascota.nombre === nombre || mascota.apodo === apodo  
        );  

        if (mascotaExistente) {  
            res.status(400).json({ error: 'Ya tienes una mascota con ese placaID, nombre o apodo' });  
            return;  
        }  

        // Crear una nueva instancia de la mascota  
        const nuevaMascota = new Mascota({  
            placaID,  
            nombre,  
            apodo,  
            estado,  
            edad,  
            descripcion,  
            imagen,  
            caracteristicas  
        });  

        // Guardar la nueva mascota en la base de datos  
        const mascotaGuardada = await nuevaMascota.save();  

        // Agregar la mascota guardada al usuario  
        usuario.mascotas.push(mascotaGuardada._id);  
        await usuario.save();  

        res.status(201).json(mascotaGuardada);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: 'Error al agregar la mascota' });  
    }  
}
