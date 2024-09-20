import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number | null = null;  
  number2: number | null = null;  
  resultMessage: string = '';     

   checkMultiple(): void {
    if (this.number1 !== null && this.number2 !== null && this.number2 !== 0) {
      if (this.number1 % this.number2 === 0) {
        this.resultMessage = `${this.number1} is a multiple of ${this.number2}.`;
      } else {
        this.resultMessage = `${this.number1} is NOT a multiple of ${this.number2}.`;
      }
    } else {
      this.resultMessage = 'Please enter valid numbers, and the second number should not be zero.';
    }
  }
}
