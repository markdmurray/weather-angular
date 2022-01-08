import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() { 
    this.current = {
      city: 'sydney',
      country: 'AU',
      date: new Date(),
      image: 'assets/images/sydney',
      temperature: 22,
      description: 'sunny'
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
