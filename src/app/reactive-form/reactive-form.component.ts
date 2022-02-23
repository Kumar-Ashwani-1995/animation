import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm!:FormGroup;
  notAllowedNames=["admin","user"]
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name':new FormControl(null,[Validators.required,this.naNames.bind(this)],[this.naAsyncNamesFromServer]),
      'otherDetails':new FormGroup({
        'gender':new FormControl(null,[Validators.required]),
        'subject':new FormControl(null,[Validators.required])
      }),
      'skills':new FormArray([
        new FormControl(null,[Validators.required])
      ])
    })
    this.myReactiveForm.statusChanges.subscribe((data)=>{
      console.log(data);
    })
    this.myReactiveForm.valueChanges.subscribe(data=>console.log(data))
  }
  setValue(){
    this.myReactiveForm.setValue({
      'name':"logger",
      'otherDetails':{
        'gender':"male",
        'subject':"maths"
      },
      'skills':[
        "hello"
      ]
    })
  }
  patchValue(){
    this.myReactiveForm.patchValue({
      'name':"debuger",
      
    })
  }
  submit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      'otherDetails':{
        'gender':"male",
        'subject':"maths"
      } 
    })
  }
  getControls() {
    return (this.myReactiveForm.get('skills') as FormArray).controls;
  }
  addSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,[Validators.required]))
  }
  naNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value)!==-1){
      return {
        valid:false
      }
    }
    return null;
  }

  naAsyncNamesFromServer(control:AbstractControl):any{
    let myResponse= new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value=="hacker"){
          resolve({valid:false})
        }
        else{
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

}
