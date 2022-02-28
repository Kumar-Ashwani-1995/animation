import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
  styleUrls: ['./routing-component.component.css']
})
export class RoutingComponentComponent implements OnInit {
  routerId=null;
  routerName="";
  routerCity="";
  loggedIn=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage["loggedIn"]=this.loggedIn

  }
  openRoute(){
    if(this.routerId){
    this.router.navigate(["route","child",this.routerId],{fragment:"idValue"});
    }
    else{
      alert("ID is empty")
    }
  }
  login(){
    this.loggedIn=!this.loggedIn;
    localStorage["loggedIn"]=this.loggedIn
    this.router.navigate(["route"])
  }
  openRoute2(){
    if(this.routerId){
      this.router.navigate(["route","child2"],{queryParams:{id:this.routerId,name:this.routerName,city:this.routerCity},fragment:"idValue"})
      }
      else{
        alert("ID is empty")
      }
    
  }

}
