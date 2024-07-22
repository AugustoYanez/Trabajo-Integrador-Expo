import { Component } from '@angular/core';
import { Contacto, Documento } from '../../interfaces/enums';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  enumDoc: typeof Documento = Documento;
  enumCon: typeof Contacto = Contacto;

  getEnumValues(enumType: any): string[] {
    return Object.keys(enumType).map(key => enumType[key]);
  }

}
