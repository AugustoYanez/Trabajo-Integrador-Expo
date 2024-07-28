import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-mascota-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './mascota-modal.component.html',
  styleUrl: './mascota-modal.component.css'
})
export class MascotaModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
