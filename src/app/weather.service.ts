import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private _HTTP: any;
  private apiKEY = environment.config.api_key

  constructor(http: HttpClient) {
    this._HTTP = http;
  }

  getWeather(city: string, countryCode: string) {
    const uri = `${this.url}${city},${countryCode}&appid=${this.apiKEY}&units=metric`;
    return this._HTTP.get(uri);

  }

}
