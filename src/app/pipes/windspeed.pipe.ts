import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windspeed'
})
export class WindspeedPipe implements PipeTransform {

  transform(value: number): string {
    const kmPerHour = value * 3.6; // 1 m/s = 3.6 km/h
    return `${kmPerHour.toFixed(2)} km/h`;
  }

}
