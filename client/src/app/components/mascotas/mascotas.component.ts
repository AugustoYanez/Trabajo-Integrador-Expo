import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contacto, Documento, Rol } from '../../interfaces/enums';
import { IUsuario } from '../../interfaces/Usuario';
import { UserService } from '../../services/user.service';
import { IMascota } from '../../interfaces/Mascota';
import { inject } from '@angular/core';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
  user: UserService = inject(UserService)
  usuario: IUsuario | null = null;
  mascotas: IMascota[] = [];

  constructor(private usuarioService: UserService) {

   }  

  ngOnInit() {  
    this.user.perfil().subscribe(data => {
      this.usuario = data;
      this.listarMascotas();
    }); 
  }  

  listarMascotas() {
    console.log('Listando mascotas:', this.usuario?.mascotas);
    this.mascotas = this.usuario?.mascotas || [];
  }

 

}
