import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {
    
   }

  getPost(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).pipe(
      // map((data:any)=>{
      //   return  data.map((val: any,index: any)=>{
      //      //console.log(val);
      //     return {...val,id:index}
      //   })
      // })
    )
  }
}
