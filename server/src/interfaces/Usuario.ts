import { Documento, Notificacion, Rol } from "./enums"

export interface IUsuario {
    nombre: string;
    apellido: string
    email: string;
    contraseña: string;
    nroDocumento: string;
    telefono: string;
    documento: Documento;
    notificacion: Notificacion;
    rol: Rol; 
}