import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleclock',
  templateUrl: './simpleclock.component.html',
  styleUrl: './simpleclock.component.css'
})
export class SimpleclockComponent {
  currentTime: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
