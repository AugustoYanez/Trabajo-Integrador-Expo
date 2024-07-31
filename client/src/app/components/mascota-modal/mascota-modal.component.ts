import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-mascota-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './mascota-modal.component.html',
  styleUrl: './mascota-modal.component.css'
})
export class MascotaModalComponent {
  userService: UserService = inject(UserService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}



  eliminarMascota() {
    this.userService.eliminarMascota(this.data._id).subscribe(
      () => {
        alert('Mascota eliminada correctamente');
        // Aquí puedes agregar lógica adicional si es necesario
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert('Error al eliminar la mascota');
      }
    );
  }
}
