import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
