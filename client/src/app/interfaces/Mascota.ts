import { Estado } from './enums';

export interface Mascota {

    placaID:number;
    nombre: string;
    apodo: string;
    edadAprox: number;
    sexo: string;
    raza: string;
    especie: string;
    estado: Estado;
    descripcion: string;
    imagen: string;
    caracteristicas: string;
}