import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
   city: string='Hyderabad';
  weatherData?:weatherData;

  constructor(private weatherService:WeatherService){}

  ngOnInit():void{
    this.getWeatherData(this.city);
    this.city='';
  }

  onSubmit(){
    this.getWeatherData(this.city);
    this.city='';
  }

  private getWeatherData(city:string){
    this.weatherService.getWeather(city).subscribe(data=>{
      this.weatherData= data;
      console.log("__WeatherData__",data);
    })
  }
}
