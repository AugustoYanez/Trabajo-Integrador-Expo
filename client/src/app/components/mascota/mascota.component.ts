import { Component } from '@angular/core';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [ RouterOutlet, RouterModule],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {

}
