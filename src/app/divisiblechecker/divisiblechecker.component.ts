import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  isDivisible: boolean | null = null;

  checkDivisibility(): void {
    if (this.number1 !== null && this.number2 !== null && this.number2 !== 0) {
      this.isDivisible = this.number1 % this.number2 === 0;
    } else {
      this.isDivisible = null;
    }
  }
}
