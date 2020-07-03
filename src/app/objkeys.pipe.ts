import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objkeys'
})
export class ObjkeysPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): string[] {
    return Object.keys(value);
  }

}
