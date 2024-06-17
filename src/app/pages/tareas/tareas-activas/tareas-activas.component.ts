import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';
import { TareaInterface } from '../../../models/tareas/tarea.interface';
import { LocalStorageService } from '../local-storage.service';
import { TablaTareasComponent } from '../tabla-tareas/tabla-tareas.component';

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
    tareasActivas: TareaInterface[] = [];
    mostrarNav: boolean = true;

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.localStorageService.tareas$.subscribe(
            (tareas) => (this.tareasActivas = tareas.activas)
        );
    }

    mostrarNavbar(event: boolean) {
        this.mostrarNav = event;
    }

    hayTareas() {
        return this.tareasActivas.length > 0;
    }
}
