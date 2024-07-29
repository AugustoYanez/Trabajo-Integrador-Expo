import { Estado } from './enums';

export interface IMascota {
    _id: string;
    placaID:string;
    nombre: string;
    apodo: string;
    edad: number;
    descripcion: string;
    imagen: string;
    caracteristicas: string
}