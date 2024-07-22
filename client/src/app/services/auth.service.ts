import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  register(user: IUsuario): Observable<any> {
    return this.http.post<IUsuario>(`${this.URL}`+ '/register', user);
  }




}
