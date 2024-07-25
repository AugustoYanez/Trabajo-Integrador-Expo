import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contacto, Documento, Rol } from '../../interfaces/enums';
import { IUsuario } from '../../interfaces/Usuario';
import { UserService } from '../../services/user.service';
import { Mascota } from '../../interfaces/Mascota';
@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
  usuario: IUsuario | null = null;
  mascotas: Mascota[] = [];

  constructor(private usuarioService: UserService) { }  

  ngOnInit() {  
    this.usuarioService.perfil().subscribe(  
      (data: IUsuario) => {  
        this.usuario = data;  
      },  
      (error) => {  
        console.error('Error al obtener usuario:', error);  
      }  
    );  
  }  

  obtenerMascotas(): Mascota[] {  
    return this.usuario ? this.usuario.mascotas : [];  
  }  
}
