import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciNumbers: number[] = [];

  generateFibonacci(): void {
    this.fibonacciNumbers = [];
    if (this.n !== null && this.n > 0) {
      let a = 0, b = 1;
      for (let i = 0; i < this.n; i++) {
        this.fibonacciNumbers.push(a);
        [a, b] = [b, a + b];
      }
    }
  }
}
