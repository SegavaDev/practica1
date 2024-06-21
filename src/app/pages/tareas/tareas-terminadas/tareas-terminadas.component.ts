import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';
import { TablaTareasComponent } from '../tabla-tareas/tabla-tareas.component';
import { ConfigDataTablaTareas } from '../../../models/tareas/configDataTabla.interface';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-tareas-terminadas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, TablaTareasComponent],
  templateUrl: './tareas-terminadas.component.html',
  styleUrl: './tareas-terminadas.component.css'
})
export class TareasTerminadasComponent {

    columnas: string[] = [
        '#',
        'Nombre',
        'Descripcion',
        'Fecha',
        'Links',
        'Estado'
    ];

    tareasTerminadas: TareaInterface[] = [];
    btnAcciones: boolean = false;

    configDataTabla!: ConfigDataTablaTareas;

    mostrarNav: boolean = true;

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.localStorageService.tareas$.subscribe(
            (tareas) => (this.tareasTerminadas = tareas.terminadas)
        );

        this.configDataTabla = {
            columnas: this.columnas,
            data: this.tareasTerminadas,
            btnsAccion: this.btnAcciones
        }
    }

    mostrarNavbar(event: boolean) {
        this.mostrarNav = event;
    }

    hayTareas() {
        return this.tareasTerminadas.length > 0;
    }

}
