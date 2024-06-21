import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';
import { Acciones } from '../../../models/enums/acciones.enum';
import { Estado } from '../../../models/enums/estados.enum';
import { AccionesTablaTransa } from '../../../models/general/accionesTabla.interface';
import { CambioEstadoTareaInterface } from '../../../models/tareas/cambioEstado.interface';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { TablaTareasComponent } from '../tabla-tareas/tabla-tareas.component';
import { ConfigDataTablaTareas } from '../../../models/tareas/configDataTabla.interface';

@Component({
    selector: 'app-tareas-activas',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        NavComponent,
        TablaTareasComponent,
    ],
    templateUrl: './tareas-activas.component.html',
    styleUrl: './tareas-activas.component.css'
})
export class TareasActivasComponent implements OnInit {
    columnas: string[] = [
        '#',
        'Nombre',
        'Descripcion',
        'Fecha',
        'Links',
        'Estado',
        'Acciones'
    ];

    tareasActivas: TareaInterface[] = [];
    btnAcciones: boolean = true;

    configDataTabla!: ConfigDataTablaTareas;

    mostrarNav: boolean = true;

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.localStorageService.tareas$.subscribe(
            (tareas) => (this.tareasActivas = tareas.activas)
        );

        this.configDataTabla = {
            columnas: this.columnas,
            data: this.tareasActivas,
            btnsAccion: this.btnAcciones
        }
    }

    mostrarNavbar(event: boolean) {
        this.mostrarNav = event;
    }

    hayTareas() {
        return this.tareasActivas.length > 0;
    }

    router(data: AccionesTablaTransa) {
        switch(data.accion) {
            case Acciones.Crear:
                this.guardarTarea(data.data);
                return;
            case Acciones.Guardar:
                return;
            case Acciones.Actualizar:
                this.modificar(data);
                return;
            case Acciones.Eliminar:
                this.eliminar(data);
                return;
            case Acciones.Buscar:
                return;
            case Acciones.Finalizar:
                this.finalizar(data);
                return;
            case Acciones.Pausar:
                return;
        }
    }

    guardarTarea(tarea: TareaInterface) {
        this.mostrarNav = false;
        this.tareasActivas.push(tarea);
        this.localStorageService.actualizarTareasActivas(this.tareasActivas);
    }

    modificar(transa: AccionesTablaTransa) {
        const cambio: CambioEstadoTareaInterface = {
            eliminar: false,
            indice: transa.index,
            tarea: transa.data,
        };

        this.localStorageService.actualizarEstado(cambio);
    }

    eliminar(transa: AccionesTablaTransa) {
        if(transa.index !== -1) {
            this.tareasActivas.splice(transa.index, 1);
            this.localStorageService.actualizarTareasActivas(this.tareasActivas);
        }
    }

    finalizar(transa: AccionesTablaTransa) {
        const { index, data } = transa;
        data.estado = Estado.Finalizado;
        const cambio: CambioEstadoTareaInterface = {
            eliminar: true,
            indice: index,
            tarea: data,
        };
        this.localStorageService.actualizarEstado(cambio);
    }
}
