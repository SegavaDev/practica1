import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaInterface } from '../../../../models/tareas/tarea.interface';
import { EstadosPipe } from '../../../../pipes/Estados/estados.pipe';
import { Estado } from '../../../../models/enums/estados.enum';

@Component({
    selector: 'app-form-actualizar-tarea',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, EstadosPipe],
    templateUrl: './form-actualizar-tarea.component.html',
    styleUrl: './form-actualizar-tarea.component.css',
})
export class FormActualizarTareaComponent {

    @Input() tareaAct!: TareaInterface;
    formActualizarTarea!: FormGroup;
    @Output() cancelar = new EventEmitter<boolean>();
    @Output() enviar = new EventEmitter<TareaInterface>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.formActualizarTarea = this.formBuilder.group({
            nombre: [this.tareaAct.nombre, Validators.required],
            descripcion: [this.tareaAct.descripcion, Validators.required],
            fecha: [this.tareaAct.fecha, Validators.required],
            link: [this.tareaAct.link]
        });
    }

    enviarForm() {
        const valores = this.formActualizarTarea.value;

        this.tareaAct.fecha = valores.fecha;
        this.tareaAct.nombre = valores.nombre;
        this.tareaAct.descripcion = valores.descripcion;
        this.tareaAct.link = valores.link;

        this.enviar.emit(this.tareaAct);
        this.resetForm();
    }

    btnCancelar() {
        this.cancelar.emit(true);
    }

    getValid(valor: string) {
        return this.formActualizarTarea.get(valor)?.invalid && (this.formActualizarTarea.get(valor)?.dirty || this.formActualizarTarea.get(valor)?.touched) && this.formActualizarTarea.get(valor)?.errors?.['required'];
    }

    getValidBtn() {
        return this.formActualizarTarea.invalid;
    }

    resetForm() {
        this.formActualizarTarea.reset({
            nombre: '',
            descripcion: '',
            fecha: '',
            link: '',
            estado: '',
        });
    }
}
