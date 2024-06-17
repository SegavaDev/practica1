import { TareaInterface } from "./tarea.interface";

export interface CambioEstadoTareaInterface {
    eliminar: boolean,
    indice?: number,
    tarea: TareaInterface
}