import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import {  } from '../ngrx-store/transfer.reducer'
import {value} from "../ValueInterface"
import { AddArrayValue,  deleteArrayValue,  getArrayValue } from '../ngrx-store/transfer.action';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-ngrx-learning',
  templateUrl: './ngrx-learning.component.html',
  styleUrls: ['./ngrx-learning.component.css']
})
export class NgrxLearningComponent implements OnInit {
  post: any=[];

  constructor(private store:Store<{arrayOp: value}>,private postService:PostService) {
       }
  onSet$!: Observable<value>;
  onSetValue:any
  ngOnInit(): void {
    this.onSet$=this.store.select('arrayOp')
    this.onSet$.subscribe(data=>this.onSetValue=data)
    
  }
  add_value_to_array(val:any){
    if(val.value){
      this.postService.getPost(val.value).subscribe(data=>{this.post.push(data)
        console.log(data);
        })
      this.store.dispatch(AddArrayValue({arrValue:val.value}))
    }

  }
  del_value_to_array(del:any){
    if(del.value && del.value<=this.onSetValue.arr.length-1 && del.value>=0){
      this.store.dispatch(deleteArrayValue({position:del.value}))
    }
    else if(this.onSetValue.arr.length===0){
      alert("No element left to delete")
    }
    else{
      const msg=del.value || "null";
      alert(msg +" is not allowed. last elements position is= "+(this.onSetValue.arr.length-1))
    }
  }

}
