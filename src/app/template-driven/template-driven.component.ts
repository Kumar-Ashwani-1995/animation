import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('myForm') myForm!:NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log("submitted" , this.myForm)
  }

}
