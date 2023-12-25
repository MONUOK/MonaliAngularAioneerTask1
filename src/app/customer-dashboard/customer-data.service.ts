import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customersData:any =[
    { 'id':'1','firstName':'abc','lastName':'xyz','email':'abc@gmail.com','phone':'8090757678'},
    { 'id':'2','firstName':'abc','lastName':'xyz','email':'abc@gmail.com','phone':'8090757678'},
    { 'id':'3','firstName':'abc','lastName':'xyz','email':'abc@gmail.com','phone':'8090757678'},
    { 'id':'4','firstName':'abc','lastName':'xyz','email':'abc@gmail.com','phone':'8090757678'},
    { 'id':'5','firstName':'abc','lastName':'xyz','email':'abc@gmail.com','phone':'8090757678'}
  ]
  constructor() { }
}
