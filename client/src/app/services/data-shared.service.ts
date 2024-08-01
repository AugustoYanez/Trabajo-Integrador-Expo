import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMascota } from '../interfaces/Mascota';
@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  default: IMascota = {
    _id: '',
    placaID: '',
    nombre: '',
    apodo: '',
    edad: 0,
    descripcion: '',
    imagen: '',
    caracteristicas: ''
  }
  private dataSources: { [id: string]: BehaviorSubject<IMascota> } = {};

  getData(id: string) {
    if (!this.dataSources[id]) {
      this.dataSources[id] = new BehaviorSubject<IMascota>(this.default);
    }
    return this.dataSources[id].asObservable();
  }

  changeData(id: string, data: IMascota) {
    if (!this.dataSources[id]) {
      this.dataSources[id] = new BehaviorSubject<IMascota>(this.default);
    }
    this.dataSources[id].next(data);
  }
}
