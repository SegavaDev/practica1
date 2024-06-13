import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';
import { TablaTareasComponent } from '../tabla-tareas/tabla-tareas.component';

@Component({
  selector: 'app-tareas-activas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavComponent, TablaTareasComponent],
  templateUrl: './tareas-activas.component.html',
  styleUrl: './tareas-activas.component.css'
})
export class TareasActivasComponent {

}
