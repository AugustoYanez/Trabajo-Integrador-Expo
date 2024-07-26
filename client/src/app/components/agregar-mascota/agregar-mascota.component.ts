import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';  
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { IMascota } from '../../interfaces/Mascota';
@Component({  
  selector: 'app-agregar-mascota',  
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-mascota.component.html',  
  styleUrls: ['./agregar-mascota.component.css']  
})  
export class AgregarMascotaComponent {  
  userService: UserService = inject(UserService);
  mascotaForm: FormGroup;  
  currentStep: number = 0; // Para controlar el paso actual  
  totalSteps: number = 6;  // Total de campos en el formulario  

  constructor(private fb: FormBuilder) {  
    this.mascotaForm = this.fb.group({  
      placaID: ['', Validators.required],  
      nombre: ['', Validators.required],  
      apodo: ['', Validators.required],  
      edad: ['', Validators.required],  
      descripcion: ['', Validators.required],  
      imagen: ['', Validators.required],  
      caracteristicas: ['', Validators.required]  
    });  
  }  

  nextStep() {  
    if (this.currentStep < this.totalSteps - 1) {  
      this.currentStep++;  
    }  
  }  

  previousStep() {  
    if (this.currentStep > 0) {  
      this.currentStep--;  
    }  
  }  

  get progressPercentage() {  
    return (this.currentStep / (this.totalSteps - 1)) * 100;  
  }  

  onSubmit() {  
    if (this.mascotaForm.valid) {  
      const nuevaMascota: IMascota = this.mascotaForm.value;  
      console.log('Nueva mascota:', nuevaMascota);  
      this.userService.agregarMascota(nuevaMascota).subscribe({  
        next: (respuesta) => {  
          console.log('Mascota agregada:', respuesta);  
        },  
        error: (error) => {  
          console.error('Error al agregar mascota:', error);  
        }  
      });  
    } else {  
      console.log('Formulario no válido', this.mascotaForm.errors); // Muestra los errores  
      console.log('Errores en los campos:', this.mascotaForm.controls);  
    }  
  }  
}