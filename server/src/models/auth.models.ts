import mongoose from "mongoose";
import { Estado, Documento, Contacto, Rol } from "../interfaces/enums";
import { ECDH } from "crypto";

const usuarioSchema = new mongoose.Schema({
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
    contrasena: {
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
    contacto: {
        type: String,
        eunm: Object.values(Contacto),
        required: true,
    },
    rol: {
        type: String,
        eunm: Object.values(Rol)
    },
    mascotas: [
      { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Mascota' 
      }
    ]
})

export const Usuario = mongoose.model('Usuario', usuarioSchema)


const mascotaSchema = new mongoose.Schema({

  placaID: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apodo: {
    type: String,
    trim: true
  },
  edad: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  imagen: {
    type: String,
    required: true
  },
  caracteristicas: {
    type: String,
    required: true,
    trim: true
  },

})

  export const Mascota = mongoose.model('Mascota', mascotaSchema)









