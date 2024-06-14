import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tarea } from '../../../models/tareas/tarea.model';

@Component({
  selector: 'app-tabla-tareas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tabla-tareas.component.html',
  styleUrl: './tabla-tareas.component.css'
})
export class TablaTareasComponent {

    tamMinTabla: number = 6 * 200;
    tamanoTds: number = 100 / 5;
    @Input() tareas: TareaInterface[] = [];
    mostrarForm: boolean = false;

    private fecha: Date = new Date();
    fechaDefault: Date = this.fecha

    tarea: TareaInterface = new Tarea("","","","",true);

    @Output() nuevaTarea = new EventEmitter<TareaInterface>();
    @Output() modificarTarea = new EventEmitter<TareaInterface>();
    @Output() eliminarTarea = new EventEmitter<TareaInterface[]>();
    @Output() finalizarTarea = new EventEmitter<TareaInterface>();

    formNuevaTarea = new FormGroup({
        nombre: new FormControl(''),
        descripcion: new FormControl(''),
        fecha: new FormControl(''),
        link: new FormControl(''),
        estado: new FormControl(true)
    });

    calcularTamanoTd(cantidad: number) {
        this.tamanoTds = 100 / cantidad;
    }

    mostrarTareas() {
        console.log(this.tareas[0].nombre);

        /* return this.tareas; */
    }

    hayTareas() {
        return this.tareas.length > 0;
    }

    mostrarFormNuevaTarea() {
        this.mostrarForm = !this.mostrarForm;
        if(!this.mostrarForm) {
            this.formNuevaTarea.reset({
                nombre: "", descripcion: "", fecha: "", link: "", estado: true
            })
        }
    }

    toTarea(form: FormGroup): TareaInterface {

        return new Tarea(
            form.value.nombre,
            form.value.descripcion,
            form.value.fecha,
            form.value.link === "" ? "Sin asignar" : form.value.link,
            form.value.estado
        );
    }

    guardarTarea() {
        this.mostrarForm = !this.mostrarForm;
        const tarea: TareaInterface = this.toTarea(this.formNuevaTarea);
        this.nuevaTarea.emit(tarea);
    }

    eliminar(index: number) {
        this.tareas.splice(index, 1);
        this.eliminarTarea.emit(this.tareas)
    }

}
