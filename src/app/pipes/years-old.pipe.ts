import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsOld'
})
export class YearsOldPipe implements PipeTransform {

  transform(value: string | number): string {
    return `${value} years old`;
  }

}
