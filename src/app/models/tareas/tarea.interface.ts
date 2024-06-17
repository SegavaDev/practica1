import { Estado } from "../enums/estados.enum";

export interface TareaInterface {
    nombre: string;
    descripcion: string;
    fecha: string;
    link: string;
    estado: Estado;
}