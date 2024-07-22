import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
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
