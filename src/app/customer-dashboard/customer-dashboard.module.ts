import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";
import { customerReducer } from './state/customer/customer.reducer';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreModule.forFeature("customer",customerReducer)
  ]
})
export class CustomerDashboardModule { }
