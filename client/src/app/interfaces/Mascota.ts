import { Estado } from './enums';

export interface IMascota {
    placaID:string;
    nombre: string;
    apodo: string;
    edad: number;
    descripcion: string;
    imagen: string;
    caracteristicas: string
}