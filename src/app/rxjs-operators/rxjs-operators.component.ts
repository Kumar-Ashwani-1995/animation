import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, debounceTime, distinctUntilChanged, filter, fromEvent, map, merge, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit,AfterViewInit {

  constructor(private http:HttpClient) { }

  ngAfterViewInit(): void {
    let callMethod=fromEvent(this.myInput.nativeElement,'keyup');
    callMethod.pipe(
      // distinctUntilChanged(),
      debounceTime(1000)
    ).subscribe((data:any)=>{
      console.log(data);
       this.inputValue=data.target.value;
    
    })

    let callMethod2=fromEvent(this.myInput2.nativeElement,'keyup');
    callMethod2.pipe(
      // distinctUntilChanged(),
      debounceTime(1000),
      switchMap((data:any) => {
        console.log(data.target.value);
        return data.target.value; 
    })
    ).subscribe((data:any)=>{
      console.log(data);
       this.SMinputValue=data;
    
    })
  }
  showData:any;
  inputValue:any;
  SMinputValue:any;
  @ViewChild('debounceInput') myInput!:ElementRef;
  @ViewChild('SwitchMapInput') myInput2!:ElementRef;
  todo(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  post(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  ngOnInit(): void {
  }

  mapMethod(){
    this.todo().pipe(
      map((data:any)=>{
         let sendData:any=[]
        for(let i of data){
          sendData.push({id:i['id'],comp:i.completed})
        }
        return sendData
      })
    ).subscribe(data=>{
      this.showData=data
    })
  }

  takeMethod(n:any){
    this.todo().pipe(
      take(4)
    ).subscribe(data=>this.showData=data)
  }
  concatMethod(){
    let combine=concat(this.todo(),this.post(),)
    this.showData=[]
    combine.subscribe((data:any)=>{
      for(let i of data){
        this.showData.push(i);
      }
      console.log(data)
    })
  }
  mergeMethod(){
    let combine=merge(this.todo(),this.post())
    this.showData=[]
    combine.subscribe((data:any)=>{
      for(let i of data){
        this.showData.push(i);
      }
      
      console.log(data)
    })
  }

  SwitchMapMethod(){
    this.todo().pipe(
      switchMap(todo=>{ 
        return this.post()
      } )
    ).subscribe(data=>this.showData=data)
    
  }

}
