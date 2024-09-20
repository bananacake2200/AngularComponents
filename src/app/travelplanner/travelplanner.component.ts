import { Component } from '@angular/core';

@Component({
  selector: 'app-travelplanner',
  templateUrl: './travelplanner.component.html',
  styleUrl: './travelplanner.component.css'
})
export class TravelplannerComponent {
  destination: string | null = null;
  startDate: string | null = null;
  endDate: string | null = null;
  activities: string[] = [];
  newActivity: string | null = null;
  tripSummary: string | null = null;

  addActivity(): void {
    if (this.newActivity) {
      this.activities.push(this.newActivity);
      this.newActivity = null;
    }
  }

  generateSummary(): void {
    this.tripSummary = `Destination: ${this.destination}\n
    Travel Dates: ${this.startDate} to ${this.endDate}\n
    Activities: ${this.activities.join(', ')}`;
  }
}
