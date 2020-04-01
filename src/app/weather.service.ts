import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private _HTTP: any;
  private apiKEY = 'f099439aceb3d423cf7ae3efe76467cb';

  constructor(http: HttpClient) {
    this._HTTP = http;
  }

  getWeather(city: string, countryCode: string) {

    const uri = `${this.url}${city},${countryCode}&appid=${this.apiKEY}&units=metric`;

    return this._HTTP.get(uri);

  }

}
