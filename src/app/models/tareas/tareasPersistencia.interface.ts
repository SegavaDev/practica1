import { TareaInterface } from "./tarea.interface";

export interface TareaPersistenciaInterface {
    activas: TareaInterface[];
    terminadas: TareaInterface[];
};

export type keyTareaPersistencia = keyof TareaPersistenciaInterface;