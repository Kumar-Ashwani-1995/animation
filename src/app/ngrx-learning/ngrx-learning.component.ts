import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import {  } from '../ngrx-store/transfer.reducer'
import {value} from "../ValueInterface"
import { AddArrayValue,  deleteArrayValue,  getArrayValue } from '../ngrx-store/transfer.action';

@Component({
  selector: 'app-ngrx-learning',
  templateUrl: './ngrx-learning.component.html',
  styleUrls: ['./ngrx-learning.component.css']
})
export class NgrxLearningComponent implements OnInit {

  constructor(private store:Store<{arrayOp: value}>) {
       }
  onSet:value={
    arr: [],
    loggedIn: false
  }
  ngOnInit(): void {
    this.store.select('arrayOp').subscribe(data=>{
      this.onSet=data;
      // console.log(data);
    })
  }
  add_value_to_array(val:any){
    if(val.value || val.value===0){
      this.store.dispatch(AddArrayValue({arrValue:val.value}))
    }

  }
  del_value_to_array(del:any){
    if(del.value && del.value<=this.onSet.arr.length-1 && del.value>=0){
      this.store.dispatch(deleteArrayValue({position:del.value}))
    }
    else if(this.onSet.arr.length===0){
      alert("No element left to delete")
    }
    else{
      const msg=del.value || "null";
      alert(msg +" is not allowed. last elements position is= "+(this.onSet.arr.length-1))
    }
  }

}
