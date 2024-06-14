import { Injectable } from '@angular/core';
import { TareaInterface } from '../../models/tareas/tarea.interface';
import { TareaPersistenciaInterface } from '../../models/tareas/tareasPersistencia.interface';
import { Tarea } from '../../models/tareas/tarea.model';

@Injectable()
export class LocalStorageService {
    keyStorage: string = 'tareas';
    keyActivas: string = 'activas';
    keyTerminadas: string = 'terminadas';
    tareas: TareaPersistenciaInterface = {
        activas: [],
        terminadas: [],
    };

    constructor() {
        this.cargarTareas();
    }

    cargarTareas() {
        let dataStorage = localStorage.getItem(this.keyStorage);

        if (dataStorage !== null) {
            let dataParse = JSON.parse(dataStorage);

            if (dataParse[this.keyActivas]) {
                this.tareas.activas = this.convertirTarea(
                    dataParse[this.keyActivas]
                );
            }
            if (dataParse[this.keyTerminadas]) {
                this.tareas.terminadas = this.convertirTarea(
                    dataParse[this.keyTerminadas]
                );
            }
        } else {
            return;
        }
    }

    convertirTarea(lista: [any]) {
        const data: any[] = [];

        for (let item of lista) {
            const tarea = new Tarea(
                item._nombre,
                item._descripcion,
                item._fecha,
                item._link,
                item._estado
            );

            data.push(tarea);
        }

        return data;
    }

    guardarTareas(tareas: TareaPersistenciaInterface) {
        localStorage.setItem(this.keyStorage, JSON.stringify(tareas));
        this.cargarTareas();
    }

    guardarTareaActiva(tarea: TareaInterface) {
        this.tareas.activas.push(tarea);
        this.guardarTareas(this.tareas);
    }

    guardarTareaTerminada(tarea: TareaInterface) {
        this.tareas.terminadas.push(tarea);
        this.guardarTareas(this.tareas);
    }

    actualizarTareasActivas(tareas: TareaInterface[]) {
        this.tareas.activas = tareas;
        this.guardarTareas(this.tareas);
    }

    actualizarTareasTerminadas(tareas: TareaInterface[]) {
        this.tareas.terminadas = tareas;
        this.guardarTareas(this.tareas);
    }

    eliminarTodo() {
        localStorage.removeItem(this.keyStorage);
        this.tareas.activas = [];
        this.tareas.terminadas = [];
    }

    verTareas() {
        return this.tareas;
    }
}
