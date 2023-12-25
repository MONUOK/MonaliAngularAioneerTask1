import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(private router: Router){

  }
  navigateCustomer(){
    this.router.navigate(['/customer-dashboard/customers'])
  }
  navigateDashboards(){
    this.router.navigate(['/customer-dashboard']) 
  }
}
