import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-child2',
  templateUrl: './router-child2.component.html',
  styleUrls: ['./router-child2.component.css']
})
export class RouterChild2Component implements OnInit {
  idval="";
  cityVal=""
  nameVal=""
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      this.idval=data['id']
      this.cityVal=data['city']
      this.nameVal=data['name']
    })
  }

}
