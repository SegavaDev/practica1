import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-tareas.component.html',
  styleUrl: './tabla-tareas.component.css'
})
export class TablaTareasComponent {

    tamMinTabla: number = 6 * 200;
    tamanoTds: number = 100 / 6;

    calcularTamanoTd(cantidad: number) {
        this.tamanoTds = 100 / cantidad;
    }

}
