import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  value: any;

  constructor(private service:TransferService) {
   }

  ngOnInit(): void {
    this.service.data.subscribe(data=>this.value=data)
  }
  sendVal(){
    this.service.data.next("Value from Component 1")
  }

}
