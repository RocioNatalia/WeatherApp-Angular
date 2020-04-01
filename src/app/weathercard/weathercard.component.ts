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

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService;
  }

  public GetWeather() {
    this.weatherService.getWeather(this.city, this.city).subscribe(res => {
      console.log(res);
    });
  }

}
