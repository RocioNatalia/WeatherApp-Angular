import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent {

  private weatherService: any;
  public city: string;
  public countrycode: string;

  public error: boolean;
  public menssageError: string;

  public loading: boolean;

  public cover: string;
  public result: boolean;

  public weather: string;
  public humidity: string;
  public temperature: string;
  public wind: string;


  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService;
  }

  public GetWeather() {
    this.loading = true;
    this.weatherService.getWeather(this.city.trim(), this.city.trim()).subscribe(res => {
      this.loading = false;
      this.error = false;
      this.result = true;

      this.city = res.name;
      this.countrycode = res.sys.country;

      this.weather = res.weather[0].description.replace(/\b\w/g, l => l.toUpperCase());

      this.humidity = res.main.humidity;
      this.temperature = res.main.temp;
      this.wind = res.wind.speed;

      this.cover = res.weather[0].main;

    }, err => {
      this.loading = false;
      this.error = true;
      this.result = false;
      this.menssageError = err.error.message;
    });
  }

}
