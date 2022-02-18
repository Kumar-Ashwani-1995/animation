import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() fromPar!:string;
  @Output() sendEvent=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  buttonClicked(val:any){
    this.sendEvent.emit(val)
  }

}
