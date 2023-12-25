import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatIconModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent {
  addCustomerForm!:FormGroup
  
  submitted = false;
  constructor(public fb:FormBuilder,private toastr: ToastrService,private router: Router){
   
  }
  onSubmit(){
    if(this.addCustomerForm.valid){
      
    }
  }
  ngOnInit(){
    this.addCustomerForm = this.fb.group({
      firstName:['',Validators.compose([Validators.required,Validators.pattern(".*\\S.")])],
      lastName:['',Validators.compose([Validators.required,Validators.pattern(".*\\S.")])],
      email:['',Validators.compose([Validators.required,Validators.email, Validators.pattern(".*\\S.")])],
      phoneNumber:['',Validators.compose([Validators.required,Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")])],
    })
  }
}
