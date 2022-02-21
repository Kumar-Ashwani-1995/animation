import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(public el:ElementRef) {
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="black"
   }

}
