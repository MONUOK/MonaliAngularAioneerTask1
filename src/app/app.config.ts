import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, ToastrModule.forRoot(),    StoreModule.forRoot({}),
    ),
    provideClientHydration(), provideAnimations(), provideStore(), provideRouterStore()]
};
