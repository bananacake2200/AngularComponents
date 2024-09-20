import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  sum: number | null = null;

  calculateSum(): void {
    this.sum = 0;
    if (this.number !== null && this.number > 0) {
      for (let i = 1; i <= this.number; i += 2) {
        this.sum += i;
      }
    }
  }
}
