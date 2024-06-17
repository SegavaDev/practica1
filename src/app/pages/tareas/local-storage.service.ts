import { Injectable } from '@angular/core';
import { TareaInterface } from '../../models/tareas/tarea.interface';
import { TareaPersistenciaInterface } from '../../models/tareas/tareasPersistencia.interface';
import { Tarea } from '../../models/tareas/tarea.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CambioEstadoTareaInterface } from '../../models/tareas/cambioEstado.interface';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private keyStorage: string = 'tareas';
    private keyActivas: string = 'activas';
    private keyTerminadas: string = 'terminadas';
    private tareas: TareaPersistenciaInterface = {
        activas: [],
        terminadas: [],
    };

    private _tareasSubject = new BehaviorSubject<TareaPersistenciaInterface>(
        this.tareas
    );
    public tareas$ = this._tareasSubject.asObservable();

    constructor() {
        this.cargarTareas();
        window.addEventListener('storage', (e) => this.cambiosStorage(e));
    }

    private cambiosStorage(e: StorageEvent) {
        if (e.key === this.keyStorage) {
            this.cargarTareas();
        }
    }

    private cargarTareas() {
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

            this._tareasSubject.next(this.tareas);
        }
    }

    private convertirTarea(lista: any[]): TareaInterface[] {
        return lista.map(
            (item) =>
                new Tarea(
                    item._nombre ?? '',
                    item._descripcion ?? '',
                    item._fecha ?? '',
                    item._link ?? '',
                    item._estado ?? 'ACTIVO'
                )
        );
    }

    private guardarTareas() {
        localStorage.setItem(this.keyStorage, JSON.stringify(this.tareas));
        this._tareasSubject.next(this.tareas);
    }

    actualizarEstado(cambio: CambioEstadoTareaInterface) {
        const { tarea, indice, eliminar } = cambio;

        if (
            tarea.estado === 'FINALIZADO' ||
            tarea.estado === 'CANCELADO'
        ) {
            if (eliminar && indice !== undefined) {
                this.tareas.activas.splice(indice, 1);
                this.tareas.terminadas.push(tarea);
            } else if (indice !== undefined) {
                this.tareas.terminadas[indice] = tarea;
            }
        } else if (
            tarea.estado === 'ACTIVO' ||
            tarea.estado === 'PAUSADO'
        ) {
            if (eliminar && indice !== undefined) {
                this.tareas.terminadas.splice(indice, 1);
                this.tareas.activas.push(tarea);
            } else if (indice !== undefined) {
                this.tareas.activas[indice] = tarea;
            }
        } else {
            return;
        }

        this.guardarTareas();
    }

    actualizarTareasActivas(tareas: TareaInterface[]) {
        this.tareas.activas = tareas;
        this.guardarTareas();
    }

    actualizarTareasTerminadas(tareas: TareaInterface[]) {
        this.tareas.terminadas = tareas;
        this.guardarTareas();
    }

    eliminarTodo() {
        localStorage.removeItem(this.keyStorage);
        this.tareas.activas = [];
        this.tareas.terminadas = [];
        this._tareasSubject.next(this.tareas);
    }

    verTareas(): Observable<TareaPersistenciaInterface> {
        return this.tareas$;
    }
}
