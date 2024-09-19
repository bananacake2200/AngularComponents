import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  inputNumber: number | null = null;  
  result: string = '';               
  
  checkEvenOdd() {
    if (this.inputNumber !== null) {
      this.result = (this.inputNumber % 2 === 0) ? 'Even' : 'Odd';
    }
  }
}
