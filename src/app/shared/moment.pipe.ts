import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentPipe',
  pure: false,
})
export class MomentPipe implements PipeTransform {
  transform(value: any, dateFormat: string): any {
    return moment(value).format(dateFormat);
  }
}
