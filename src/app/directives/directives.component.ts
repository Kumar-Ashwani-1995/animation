import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  value=false;
  array=[1,2,3,4,5,6,7,8,9,10];
  grade="NA";
  ngOnInit(): void {
  }

}
