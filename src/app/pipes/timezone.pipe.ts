import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezone'
})
export class TimezonePipe implements PipeTransform {

  transform(offsetSeconds: number): string {
    // Calculate hours and minutes
    const hours = Math.floor(offsetSeconds / 3600);
    const minutes = Math.floor((offsetSeconds % 3600) / 60);

    // Construct a formatted string
    const sign = offsetSeconds >= 0 ? '+' : '-';
    return `UTC${sign}${this.padWithZero(hours)}:${this.padWithZero(minutes)}`;
  }

  private padWithZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
