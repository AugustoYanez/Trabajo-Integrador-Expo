import { Component, inject } from '@angular/core';
import { Contacto, Documento, Rol } from '../../interfaces/enums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUsuario } from '../../interfaces/Usuario';
import { AuthService } from '../../services/auth.service';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: IUsuario = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    nroDocumento: '',
    documento: Documento.Cuil,
    contacto: Contacto.Email,
    rol: Rol.Usuario,
    telefono: '',
  };

  auth: AuthService = inject(AuthService);
  mensajeExito: string | null = null;
  mensajeError: string[] | null = null;


constructor(private Router: Router) {

}

  validarCampos(): string[] {
    const errores: string[] = [];
    if (!this.usuario.email || !this.usuario.contrasena) {
      errores.push("Los campos están vacíos.");
    }
    return errores;
  }

  guardarUsuario(evento: Event) {
    evento.preventDefault();
    
    const errores = this.validarCampos();
    if (errores.length > 0) {
      this.mensajeError = errores;
      this.mensajeExito = null;
      return;
    }

    this.auth.login(this.usuario).subscribe({
      next: (res) => {
        this.mensajeExito = res.message;
        this.mensajeError = null;
        localStorage.setItem('token', res.token);
        if (res.admin) {
          localStorage.setItem('admin', res.admin);
        }
        this.Router.navigate(['/']);
      },      
      error: (err) => {
        this.mensajeExito = null;
        this.mensajeError = err.error;
      }  
    });
  }
}
