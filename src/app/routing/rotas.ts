import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { StoreComponent } from '../store/store.component';

export const rotas: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'store', component: StoreComponent},
    {path: '', redirectTo: '/store', pathMatch: 'full'}

];