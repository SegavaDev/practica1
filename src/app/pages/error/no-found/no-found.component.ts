import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Responsive404 } from '../../../models/responsividad/responsive.model';



@Component({
  selector: 'app-no-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './no-found.component.html',
  styleUrl: './no-found.component.css'
})
export class NoFoundComponent {

    pantalla: number = window.screen.width;
    responsive: Responsive404 = new Responsive404();

    ngOnInit () {
        if(this.pantalla > 1000) {
            this.responsive.titulo = `${this.pantalla / 10}px`;
            this.responsive.texto = `${this.pantalla / 60}px`;
            this.responsive.boton = {
                alto: "60px",
                ancho: "150px",
                texto: "24px"
            }
        }else {
            `${this.pantalla / 15}px`;
        }
    }

}
