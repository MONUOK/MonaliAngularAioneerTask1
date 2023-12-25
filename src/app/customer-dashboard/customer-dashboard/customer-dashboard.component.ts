import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [SideBarComponent,HeaderComponent, RouterOutlet],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {

}
