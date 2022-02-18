import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  value: any;
  constructor(private service:TransferService) { }

  ngOnInit(): void {
    this.service.data.subscribe(data=>this.value=data)
  }

  sendVal(){
    this.service.data.next("Value from Component 2")
  }

}
