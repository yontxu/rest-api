import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<string>, key: string, value: string): Array<string> {
    return array.filter( item => {
      let regex = new RegExp(value, 'i');
      return regex.test(item[key]);
    });
  }

}
