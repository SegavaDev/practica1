import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';
import { TareaPersistenciaInterface } from '../../models/tareas/tareasPersistencia.interface';
import { LocalStorageService } from './local-storage.service';

@Component({
    selector: 'app-tareas',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavComponent, RouterLink],
    templateUrl: './tareas.component.html',
    styleUrl: './tareas.component.css',
})
export class TareasComponent implements OnInit {
    tareas: TareaPersistenciaInterface = {
        activas: [],
        terminadas: [],
    };

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.localStorageService.tareas$.subscribe(
            tareas => {
                this.tareas.activas = tareas.activas;
                this.tareas.terminadas = tareas.terminadas;
            }
        )
    }

    hayActivas() {
        return this.tareas.activas.length > 0;
    }

    hayTerminadas() {
        return this.tareas.terminadas.length > 0;
    }
}
