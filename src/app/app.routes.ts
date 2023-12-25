import { Routes } from '@angular/router';
import { LoginComponent } from './customer-dashboard/login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'/login'},
    {path:'login',component:LoginComponent},
    {path:'customer-dashboard', component:CustomerDashboardComponent,
    children:[
        {path:'',redirectTo:'',pathMatch:'full'},
        {path:'', loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule)}
    ]
}
   
];
