import { Documento, Contacto, Rol } from "./enums"

export interface IUsuario {
    nombre: string;
    apellido: string
    email: string;
    contrasena: string;
    nroDocumento: string;
    telefono: string;
    documento: Documento;
    contacto: Contacto;
    rol: Rol; 
}