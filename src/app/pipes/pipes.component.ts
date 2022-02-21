import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  dateVal=new Date();
  jsonVal ={ moo: 'foo', goo: { too: 'new' }}
  constructor() { }

  ngOnInit(): void {
  }

}
