import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditarMascotaModalComponent } from '../editar-mascota-modal/editar-mascota-modal.component';
import { DataSharedService } from '../../services/data-shared.service';
@Component({
  selector: 'app-mascota-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './mascota-modal.component.html',
  styleUrl: './mascota-modal.component.css'
})
export class MascotaModalComponent {
  userService: UserService = inject(UserService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MascotaModalComponent>, private router: Router, public dialog: MatDialog, private sharedData: DataSharedService) { }

  eliminarMascota() {
    this.userService.eliminarMascota(this.data._id).subscribe(
      () => {
        this.dialogRef.close();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert('Error al eliminar la mascota');
      }
    );
  }
  editarMascota() {
    const dialogRef = this.dialog.open(EditarMascotaModalComponent, {
      width: '400px',
      data: this.data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      this.sharedData.changeData(result._id, result);
    })
  }
}