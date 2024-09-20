import { Component } from '@angular/core';

@Component({
  selector: 'app-clicktracker',
  templateUrl: './clicktracker.component.html',
  styleUrl: './clicktracker.component.css'
})
export class ClicktrackerComponent {
  clickCount: number = 0;

  trackClick() {
    this.clickCount++;
  }
}
