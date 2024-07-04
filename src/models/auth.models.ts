import mongoose from "mongoose";

const usuario = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
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
    }
})

export const Usuario = mongoose.model('Usuario', usuario)