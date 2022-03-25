import {  createReducer, on } from "@ngrx/store";
import * as TransferAction from "./transfer.action"
import {value} from "../ValueInterface"

const initialState:value={
    arr:[1,2],
    loggedIn:false
}
export const transferArray = createReducer(initialState,
    on(TransferAction.getArrayValue,(state)=>{

        return {...state}
    }),
    on(TransferAction.AddArrayValue,(state,action)=>{
        console.log(action.arrValue);
        
        return {...state,arr:[...state.arr,action.arrValue]}
    }),
    on(TransferAction.deleteArrayValue,(state,{position})=>{
        console.log(position);
        
        return {...state,arr:state.arr.filter((data,index)=>{
            if(index!=position){
                return data
            }
        })}
    })
)

