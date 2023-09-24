import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { weatherData } from "../models/weather.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  apiKey = "a1e3640f55893fa2a3a53491b397ac5f";

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<weatherData> {
    return this.http.get<weatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
