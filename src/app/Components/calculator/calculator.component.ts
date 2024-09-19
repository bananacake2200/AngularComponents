import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number | null = null;  
  number2: number | null = null;  
  result: number | null = null;   

  
  add() {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 + this.number2;
    }
  }

  subtract() {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 - this.number2;
    }
  }

  multiply() {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 * this.number2;
    }
  }

  divide() {
    if (this.number1 !== null && this.number2 !== null && this.number2 !== 0) {
      this.result = this.number1 / this.number2;
    } else if (this.number2 === 0) {
      this.result = null;  
      alert('Cannot divide by zero!');
    }
  }
}
