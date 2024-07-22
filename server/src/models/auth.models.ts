import mongoose from "mongoose";
import { Documento, Notificacion, Rol } from "../interfaces/enums";

const usuario = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    nroDocumento: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
    documento: {
        type: String,
        eunm: Object.values(Documento),
        required: true,
    },
    notificacion: {
        type: String,
        eunm: Object.values(Notificacion),
        required: true,
    },
    rol: {
        type: String,
        eunm: Object.values(Rol)
    },
})

export const Usuario = mongoose.model('Usuario', usuario)