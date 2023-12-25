const initialState ={
    customers:[{
        firstName:'abc',
        lastName:'xyz',
        email:'abc@gmail.com',
        phoneNumber:'6778890000',
        id:1
    }
    ],
    // loading:false,
    // loaded:true
};
export function  customerReducer(state =initialState,action:any){
    switch(action.type){
        case "LOAD CUSTOMERS":{
            return {
                ...state,
                // loading:true,
                // loaded:false
            };
        }
        default:{
            return state
        }
    }
}
// import * as customerActions from "./customer.actions";
// import { createFeatureSelector, createSelector } from "@ngrx/store";

// import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

// import { Customer } from "../../customer.model";
// import * as fromRoot from "../../../state/app-state";
// import { state } from "@angular/animations";
// import { Action } from "rxjs/internal/scheduler/Action";
// export interface customerState{
//     customers:Customer[],
//     loading:boolean,
//     loaded:boolean,
//     error:string

// }
// export interface AppState extends fromRoot.AppState{
//     customers: customerState
// }
// export const initialState:customerState ={
//     customers:[],
//     loading:false,
//     loaded:false,
//     error:""
// };
// export function customerReducer {
//     state =initialState,
//     action: customerActions.Action
// }: customerState{
//     switch(action.type){
//         case customerActions.CustomerActionTypes.LOAD_CUSTOMER:{
//             return {
//                 ...state,
//                 loading:true

//             }
//         }
//         case customerActions:customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:{
//             return{
//                 ...state,
//                 cutomers:[],
//                 loading:false,
//                 loaded:false,
//                 error:""
//             }
//         }
//     }

// }