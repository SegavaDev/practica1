import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Acciones } from '../../../models/enums/acciones.enum';
import { Estado } from '../../../models/enums/estados.enum';
import { AccionesTablaTransa } from '../../../models/general/accionesTabla.interface';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { Tarea } from '../../../models/tareas/tarea.model';
import { EnumConverterService } from '../../../services/converters/enum/enum-converter.service';
import { FormActualizarTareaComponent } from './form-actualizar-tarea/form-actualizar-tarea.component';
import { FormNuevasTareasComponent } from './form-nuevas-tareas/form-nuevas-tareas.component';
import { ConfigDataTablaTareas } from '../../../models/tareas/configDataTabla.interface';

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
    @Input() configData!: ConfigDataTablaTareas;

    columnas!: string[];
    data!: TareaInterface[];
    btnsAccion!: boolean;

    mostrarForm: boolean = false;
    mostrarFormActualizar: boolean = false;
    indexActualizar: number = -1;

    tareaTabla: TareaInterface = new Tarea('', '', '', '', Estado.Activo);

    @Output() mostrarNav = new EventEmitter<boolean>();
    @Output() sacarData = new EventEmitter<AccionesTablaTransa>();

    constructor(
        private enumConverter: EnumConverterService
    ) {}

    ngOnInit(): void {
        const { columnas, data, btnsAccion } = this.configData;
        console.log(this.configData);

        this.columnas = columnas;
        this.data = data;
        this.btnsAccion = btnsAccion;
    }

    hayTareas() {
        return this.data.length > 0;
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

        this.tareaTabla = this.data[index];

        this.mostrarFormActualizarTarea();
    }

    enviarData(accion: string, data: TareaInterface) {
        if(!this.mostrarForm && this.mostrarFormActualizar) {
            this.mostrarFormActualizarTarea();
        }

        const acc: Acciones = this.enumConverter.stringToEnum(Acciones, accion);

        const res: AccionesTablaTransa = {
            accion: acc,
            index: this.indexActualizar,
            data: data
        };

        this.indexActualizar = -1;
        this.sacarData.emit(res);
        if(this.mostrarForm && !this.mostrarFormActualizar) {
            this.mostrarFormNuevaTarea();
        }
    }
}
