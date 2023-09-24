import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(unixTime: number): string {
    const date = new Date(unixTime * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours < 12 ? 'AM' : 'PM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
  }
}
