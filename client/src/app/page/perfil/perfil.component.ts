import { Component, inject, OnInit } from '@angular/core';

import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  user: UserService = inject(UserService)

  constructor(){}

  ngOnInit(): void {
    this.user.perfil().subscribe(data => {
      console.log(data);
    })
  }
}
