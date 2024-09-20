import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;  
  result: number | null = null;  

   
  calculateFactorial(): void {
    if (this.number !== null && this.number >= 0) {
      this.result = this.factorial(this.number);
    }
  }

  
  factorial(n: number): number {
    return (n <= 1) ? 1 : n * this.factorial(n - 1);
  }
}
