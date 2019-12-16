import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { StoreComponent } from '../store/store.component';
import { RegisterComponent } from '../register/register.component';

export const rotas: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'store', component: StoreComponent},
    {path: 'store/:login', component: StoreComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: '/store?login=true', pathMatch: 'full'}

];