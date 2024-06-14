import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';
import { TablaTareasComponent } from '../tabla-tareas/tabla-tareas.component';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-tareas-activas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavComponent, TablaTareasComponent],
  templateUrl: './tareas-activas.component.html',
  styleUrl: './tareas-activas.component.css',
  providers: [LocalStorageService]
})
export class TareasActivasComponent {
    tareasActivas: TareaInterface[] | [];

    constructor(private localStorageService: LocalStorageService) {
        this.tareasActivas = localStorageService.verTareas().activas;
    }

    hayTareas() {
        return this.tareasActivas.length > 0;
    }

    gurdarTarea(tarea: TareaInterface) {
        this.localStorageService.guardarTareaActiva(tarea);
    }

    actualizarTareasActivas(tareas: TareaInterface[]) {
        this.localStorageService.actualizarTareasActivas(tareas);
    }

}
