import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = '';  
  upperText: string = '';  

   convertToUpper(): void {
    this.upperText = this.inputText.toUpperCase();
  }
}
