import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/Usuario';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  register(user: IUsuario): Observable<any> {
    return this.http.post<IUsuario>(`${this.URL}`+ '/register', user);
  }

  login(user: IUsuario): Observable<any> {
    return this.http.post<IUsuario>(`${this.URL}`+ '/login', user);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  loggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



}
