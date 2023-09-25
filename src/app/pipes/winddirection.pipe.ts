import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winddirection'
})
export class WinddirectionPipe implements PipeTransform {

  transform(degrees: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((degrees % 360) / 45);
    return directions[index % 8];
  }

}
