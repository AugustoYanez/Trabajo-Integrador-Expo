import { Routes } from '@angular/router';  
import { AppComponent } from './app.component';  
import { RegisterComponent } from './page/register/register.component';  
import { LoginComponent } from './page/login/login.component';  
import { HomeComponent } from './page/home/home.component';  
import { PerfilComponent } from './page/perfil/perfil.component';  
import { AdoptarComponent } from './page/adoptar/adoptar.component';  
import { MascotasComponent } from './page/mascotas/mascotas.component';// Componente para gestionar mascotas  
import { AjustesCuentaComponent } from './components/ajustes-cuenta/ajustes-cuenta.component';
import { AuthGuard } from './auth.guard';  
import { AdopcionComponent } from './page/adopcion/adopcion.component';  
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';
export const routes: Routes = [ 

  { path: '', component: HomeComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'login', component: LoginComponent },  
 
  {  
    path: '',  
    canActivate: [AuthGuard],  
    children: [  
      { path: 'perfil', component: PerfilComponent },  
      { path: 'adoptar', component: AdoptarComponent },  
      { path: 'adopcion', component: AdopcionComponent },  
      { path: 'ajustes-cuenta', component: AjustesCuentaComponent } ,
      { path: 'agg-mascota', component: AgregarMascotaComponent } ,
      
    ]  
  }  ,

   { 
    path: 'mascotas', 
  canActivate: [AuthGuard],
  children : [
    { path: '', component: MascotasComponent },
    { path: 'agg-mascota', component: AgregarMascotaComponent },
    { path: 'mascota/:id', component: MascotaComponent }
  ]
}
];