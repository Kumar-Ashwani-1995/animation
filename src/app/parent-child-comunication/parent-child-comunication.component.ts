import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-comunication',
  templateUrl: './parent-child-comunication.component.html',
  styleUrls: ['./parent-child-comunication.component.css']
})
export class ParentChildComunicationComponent implements OnInit {

  constructor() { }
  name="anything";
  valFromChild!: string;
  ngOnInit(): void {
  }

}
