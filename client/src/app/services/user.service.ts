import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient, private router: Router) { }

  perfil(): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.URL}`+ '/perfil');
  }

  
}
