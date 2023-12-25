import { Component } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerAddComponent,CustomerEditComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customers:any=[]
  isAddCustomer:boolean =false
  isEditCutomer:boolean=false
constructor(private customersData:CustomerDataService,private store:Store<any>){
// this.customers=this.customersData.customersData
}
editCustomer(id:any){
  this.isEditCutomer =true
  this.isAddCustomer =false
}
addCustomer(){
this.isAddCustomer =true
}
deleteCustomer(id:any){
this.customersData.customersData.pop()
}
ngOnInit(){
  this.store.dispatch({type:'LOAD CUSTOMERS'})
  this.store.subscribe(state=>{
    console.log(state,'state')
    this.customers= state.customer.customers
  })
}
}
