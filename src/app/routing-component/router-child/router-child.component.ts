import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-child',
  templateUrl: './router-child.component.html',
  styleUrls: ['./router-child.component.css']
})
export class RouterChildComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  idval:any;
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.idval=data['id']
    })
  }

}
