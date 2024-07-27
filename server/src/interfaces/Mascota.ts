import { Estado } from './enums';

export interface IMascota {

    placaID:string;
    nombre: string;
    apodo: string;
    estado: Estado;
    edad: number;
    descripcion: string;
    imagen: string;
    caracteristicas: string
}