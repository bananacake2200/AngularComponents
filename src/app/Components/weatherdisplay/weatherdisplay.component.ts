import { Component } from '@angular/core';

@Component({
  selector: 'app-weatherdisplay',
  templateUrl: './weatherdisplay.component.html',
  styleUrl: './weatherdisplay.component.css'
})
export class WeatherdisplayComponent {
  city: string = 'New York'; 
  weather: string = ''; 

  
  weatherData: { [key: string]: string } = {
    'New York': 'Sunny, 25°C',
    'Los Angeles': 'Cloudy, 22°C',
    'London': 'Rainy, 18°C',
    'Tokyo': 'Clear, 30°C',
    'Paris': 'Windy, 20°C'
  };

  constructor() {
    this.getWeather();
  }

  getWeather(): void {
    this.weather = this.weatherData[this.city] || 'Weather data not available';
  }
}
