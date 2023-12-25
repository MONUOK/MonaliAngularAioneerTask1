import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'',component:DashboardsComponent},
  {path:'customers',component:CustomersComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
