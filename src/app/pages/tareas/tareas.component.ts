import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';
import { LocalStorageService } from './local-storage.service';
import { TareaPersistenciaInterface } from '../../models/tareas/tareasPersistencia.interface';
import { TareaInterface } from '../../models/tareas/tarea.interface';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, RouterLink],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  providers: [LocalStorageService]
})
export class TareasComponent {
    tareas: TareaPersistenciaInterface = {
        activas: [],
        terminadas: []
    };

    constructor(private localStorageService: LocalStorageService) {
        const dataStorage: TareaPersistenciaInterface = localStorageService.verTareas();

        this.tareas.activas = dataStorage.activas;
        this.tareas.terminadas = dataStorage.terminadas;
    }

    hayActivas() {
        return this.tareas.activas.length > 0;
    }

    hayTerminadas() {
        return this.tareas.terminadas.length > 0;
    }

}
