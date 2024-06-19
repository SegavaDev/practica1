import { Acciones } from "../enums/acciones.enum";
import { TareaInterface } from "../tareas/tarea.interface";

export interface AccionesTablaTransa {
    accion: Acciones,
    index: number,
    data: TareaInterface
}