import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  inputNumber: number | null = null; 
  multiplicationTable: number[] = []; 
  generateTable() {
    if (this.inputNumber !== null) {
      this.multiplicationTable = [];
      for (let i = 1; i <= 20; i++) {
        this.multiplicationTable.push(this.inputNumber * i);
      }
    }
  }
}
