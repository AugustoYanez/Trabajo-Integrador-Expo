import bcrypt from "bcrypt";
import {IUsuario} from "../interfaces/Usuario"
import { Usuario } from "../models/auth.models";
import { Request as IReq, Response as IRes } from 'express';
import { createAccesToken } from "../libs/jwt";

export const login = async (req: IReq, res: IRes) => {
    const {email, contraseña}: IUsuario = req.body;

    const found = await Usuario.findOne({email});
    if (!found) return res.status(400).json(["No se encontro al usuario. "]); 

    const match = await bcrypt.compare(contraseña, found.contraseña)
    if(!match) return res.status(500).json(["Contraseña incorrecta. "]);
    
    const token = await createAccesToken({_id: found._id, nombre: found.nombre, email: found.email});
    
    res.json({ message: 'Sesion iniciada correctamente.', token });
}

export const register = async (req: IReq, res: IRes) => {
    const {nombre, apellido, documento, notificacion, nroDocumento, telefono, email, contraseña}: IUsuario = req.body;

    const found = await Usuario.findOne({email});

    if (found) return res.status(400).json(["El nombre o email ya esta en uso."]);

    const hash = await bcrypt.hash(contraseña, 10);

    const log = await new Usuario({nombre, apellido, documento, notificacion, nroDocumento, telefono, email, contraseña:hash}).save();
    
    const token = await createAccesToken({_id: log._id,  email: log.email});
    
    res.status(201).json({ message: 'Registro correcto. ', token });
}