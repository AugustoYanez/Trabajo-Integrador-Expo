import { Estado } from './enums';

export interface Mascota {

    placaID:number;
    nombre: string;
    edad: number;
    raza: string;
    especie: string;
    estado: Estado;
    descripcion: string;
    imagen: string;
    
}