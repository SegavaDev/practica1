import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Estado } from '../../../models/enums/estados.enum';
import { CambioEstadoTareaInterface } from '../../../models/tareas/cambioEstado.interface';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { Tarea } from '../../../models/tareas/tarea.model';
import { LocalStorageService } from '../local-storage.service';
import { FormActualizarTareaComponent } from './form-actualizar-tarea/form-actualizar-tarea.component';
import { FormNuevasTareasComponent } from './form-nuevas-tareas/form-nuevas-tareas.component';

@Component({
    selector: 'app-tabla-tareas',
    standalone: true,
    imports: [
        CommonModule,
        FormNuevasTareasComponent,
        FormActualizarTareaComponent,
    ],
    templateUrl: './tabla-tareas.component.html',
    styleUrl: './tabla-tareas.component.css',
})
export class TablaTareasComponent implements OnInit {
    tareas: TareaInterface[] = [];

    tamanoTds: number = 100 / 5;
    mostrarForm: boolean = false;
    mostrarFormActualizar: boolean = false;
    indexActualizar?: number;

    tareaTabla: TareaInterface = new Tarea('', '', '', '', Estado.Activo);

    @Output() mostrarNav = new EventEmitter<boolean>();

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.localStorageService.tareas$.subscribe(
            (tareas) => (this.tareas = tareas['activas']) //Mejorar la tabla, hacerla reutilizable
        );
    }

    hayTareas() {
        return this.tareas.length > 0;
    }

    mostrarFormNuevaTarea() {
        this.mostrarForm = !this.mostrarForm;
        this.mostrarNav.emit(!this.mostrarForm);
    }

    mostrarFormActualizarTarea() {
        this.mostrarFormActualizar = !this.mostrarFormActualizar;
        this.mostrarNav.emit(!this.mostrarFormActualizar);
    }

    toTarea(form: FormGroup): TareaInterface {
        return new Tarea(
            form.value.nombre,
            form.value.descripcion,
            form.value.fecha,
            form.value.link === '' ? 'Sin asignar' : form.value.link,
            form.value.estado
        );
    }

    enviarFormActualizar(tarea: TareaInterface, index: number) {
        this.indexActualizar= index;

        this.tareaTabla = this.tareas[index];

        this.mostrarFormActualizarTarea();
    }

    finalizar(index: number, tarea: TareaInterface) {
        tarea.estado = Estado.Finalizado;
        const cambio: CambioEstadoTareaInterface = {
            eliminar: true,
            indice: index,
            tarea: tarea,
        };
        this.localStorageService.actualizarEstado(cambio);
    }

    modificar(tarea: TareaInterface) {
        this.mostrarFormActualizarTarea();

        const cambio: CambioEstadoTareaInterface = {
            eliminar: false,
            indice: this.indexActualizar,
            tarea: tarea,
        };
        this.indexActualizar = undefined;
        this.localStorageService.actualizarEstado(cambio);
    }

    guardarTarea(form: FormGroup) {
        this.mostrarForm = !this.mostrarForm;
        this.mostrarNav.emit(!this.mostrarForm);
        const tarea: TareaInterface = this.toTarea(form);
        this.tareas.push(tarea);
        this.localStorageService.actualizarTareasActivas(this.tareas);
    }

    eliminar(index: number) {
        this.tareas.splice(index, 1);
        this.localStorageService.actualizarTareasActivas(this.tareas);
    }
}
