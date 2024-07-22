import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [

{
    path: '',
    component: HomeComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'login',
    component: LoginComponent
}


];
