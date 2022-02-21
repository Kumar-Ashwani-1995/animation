import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [price,unit]=args;
    if(!price){
      price=1;
    }
    if(!unit){
      unit="$";
    }
    return (value*price)+unit;
  }

}
