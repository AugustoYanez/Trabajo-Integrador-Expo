import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IMascota } from '../../interfaces/Mascota';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-mascota-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './editar-mascota-modal.component.html',
  styleUrl: './editar-mascota-modal.component.css'
})
export class EditarMascotaModalComponent {
  mascota: IMascota;
  mensajeExito: string | null = null;
  mensajeError: string[] | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IMascota, public dialogRef: MatDialogRef<EditarMascotaModalComponent>){
    this.mascota = {
      ...data
    }
  }
  guardarMascota(event: Event): void {

  }
}
