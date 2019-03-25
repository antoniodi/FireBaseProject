import linkifyStr from 'linkifyjs/string';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkifyString'
})
export class LinkifyStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? linkifyStr(value, {target: 'system'}) : value;
  }

}
