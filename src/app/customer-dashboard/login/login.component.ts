import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  customerLoginForm!:FormGroup
  hide = true;
  submitted = false;
  constructor(public fb:FormBuilder,private toastr: ToastrService,private loginService:LoginServiceService,private router: Router){
   
  }
  onSubmit(){
    if(this.customerLoginForm.valid){
      if(this.customerLoginForm.value.email == this.loginService.customer.email && this.customerLoginForm.value.password == this.loginService.customer.password){
        this.router.navigate(['/customer-dashboard'])
        this.toastr.success('Login Success, Welcome to dashboard');
      }else{
        this.toastr.error('Email and Password does not match!');
      }
    }
  }
  ngOnInit(){
    this.customerLoginForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email,Validators.pattern(".*\\S.")])],
      password:['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')])]
    })
  }
}
