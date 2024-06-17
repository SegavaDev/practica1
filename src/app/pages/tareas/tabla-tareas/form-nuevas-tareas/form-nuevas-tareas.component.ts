import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Estado } from '../../../../models/enums/estados.enum';

@Component({
    selector: 'app-form-nuevas-tareas',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-nuevas-tareas.component.html',
    styleUrl: './form-nuevas-tareas.component.css',
})
export class FormNuevasTareasComponent {
    formNuevaTarea = new FormGroup({
        nombre: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        fecha: new FormControl('', Validators.required),
        link: new FormControl(''),
        estado: new FormControl(Estado.Activo),
    });

    @Output() enviar = new EventEmitter<FormGroup>();
    @Output() cancelar = new EventEmitter<boolean>();

    enviarForm() {
        this.formNuevaTarea.controls.fecha.errors?['required']:
        this.formNuevaTarea.controls.nombre.errors?['required']:
        this.formNuevaTarea.controls.descripcion.errors?['required']:

        this.enviar.emit(this.formNuevaTarea);
        this.resetForm()
    }

    resetForm() {
        this.formNuevaTarea.reset({
            nombre: '',
            descripcion: '',
            fecha: '',
            link: '',
            estado: Estado.Activo,
        });
    }

    getValid(valor: string) {
        return this.formNuevaTarea.get(valor)?.invalid && (this.formNuevaTarea.get(valor)?.dirty || this.formNuevaTarea.get(valor)?.touched) && this.formNuevaTarea.get(valor)?.errors?.['required'];
    }

    getValidBtn() {
        return this.formNuevaTarea.invalid;
    }

    btnCancelar() {
        this.cancelar.emit(true);
        this.resetForm();
    }
}
