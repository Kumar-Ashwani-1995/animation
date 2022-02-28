import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { catchError, observable, throwError } from 'rxjs';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {
  postArray:any;
  responseData:any;
  postForm!:FormGroup;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
      "name":new FormControl(null),
      "job":new FormControl(null)
    })
  }
  getcall(){
    let headers =new HttpHeaders({
      'auth':"authentication",
      'type':"post call for 100 data"
    })
    return this.http.get("https://jsonplaceholder.typicode.com/posts/",{headers}).pipe(
      catchError((err)=>{
        console.log(err.message);
        return throwError(()=>err.message);
      }
      )
    )
  }
  
  getPosts(){

  this.getcall().subscribe({
      next: (v) => this.postArray=v,
      error: (e) => alert(e),
      complete: () => console.info('complete')
  })
    
  }
  getPostById(id:any){
    
  }

  postData(){
    console.log(this.postForm.value)

    let {name,job}=this.postForm.value;
    this.http.post("https://reqres.in/api/users",{ "name": name,
    "job": job}).subscribe(data=>{console.table(data);
  this.responseData=data})
  }

}
