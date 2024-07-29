import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { IMascota } from '../../interfaces/Mascota';
import { Router } from '@angular/router';
import { Estado } from '../../interfaces/enums';

@Component({
  selector: 'app-agregar-mascota',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  mascotaForm: FormGroup;
  currentStep: number = 0; // Para controlar el paso actual
  totalSteps: number = 8;  // Total de pasos en el formulario
  enumEstado: typeof Estado = Estado;
  imagenArchivo: File | null = null; // Para manejar el archivo de imagen

  constructor(private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      placaID: ['', Validators.required],
      nombre: ['', Validators.required],
      apodo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      estado: ['', Validators.required],
      descripcion: ['', Validators.required],
      caracteristicas: ['', Validators.required]
    });
  }

  getEnumValues(enumType: any): string[] {
    return Object.keys(enumType).map(key => enumType[key]);
  }

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      if (this.isCurrentStepValid()) {
        this.currentStep++;
      }
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  isCurrentStepValid(): boolean {
    const stepControls = [
      ['placaID'],
      ['nombre'],
      ['apodo'],
      ['edad'],
      ['estado'],
      ['descripcion'],
      ['imagen'],
      ['caracteristicas']
    ];
    const currentStepControls = stepControls[this.currentStep];
    let isValid = true;

    currentStepControls.forEach(controlName => {
      const control = this.mascotaForm.get(controlName);
      if (control && control.invalid) {
        control.markAsDirty();
        control.markAsTouched();
        isValid = false;
      }
    });

    return isValid;
  }

  get progressPercentage() {
    return (this.currentStep / this.totalSteps) * 100;
  }

  onImageSelected(event: any) {
    if (event.target.files.length > 0) {
      this.imagenArchivo = <File>event.target.files[0];
      this.mascotaForm.get('imagen')?.setValue(this.imagenArchivo); // Establece el nombre del archivo en el campo del formulario
      console.log(this.mascotaForm.get('imagen'));
    }
  }

  onSubmit() {
    if (this.mascotaForm.valid) {
      const nuevaMascota: IMascota = {
        ...this.mascotaForm.value,
        imagen: this.imagenArchivo
      };

      console.log('Nueva mascota:', nuevaMascota);
      this.userService.agregarMascota(nuevaMascota).subscribe({
        next: (respuesta) => {
          console.log('Mascota agregada:', respuesta);
          this.router.navigate(['/mascotas']); // Redireccionar al enviar
        },
        error: (error) => {
          console.error('Error al agregar mascota:', error);
        }
      });
    } else {
      console.log('Formulario no válido', this.mascotaForm.errors);
      console.log('Errores en los campos:', this.mascotaForm.controls);
    }
  }
}
