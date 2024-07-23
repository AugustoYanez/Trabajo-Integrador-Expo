import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AdoptarComponent } from './components/adoptar/adoptar.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    { path: 'adoptar', component: AdoptarComponent },
  ];
