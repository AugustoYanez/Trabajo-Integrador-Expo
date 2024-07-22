import { Component } from '@angular/core';
import { Contacto, Documento, Rol } from '../../interfaces/enums';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { IUsuario } from '../../interfaces/Usuario';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario: IUsuario;

  enumDoc: typeof Documento = Documento;
  enumCon: typeof Contacto = Contacto;


  constructor(){

this.usuario =   {
  nombre: '',
  apellido: '',
  email: '',
  contrasenia: '',
  nroDocumento: '',
  documento: Documento.Cuil,
  contacto: Contacto.Email,
  rol: Rol.Usuario,
  telefono: '',
}
  
}
  




  getEnumValues(enumType: any): string[] {
    return Object.keys(enumType).map(key => enumType[key]);
  }

guardarUsuario(evento: Event){
  evento.preventDefault();
  console.log(this.usuario);



}
}
