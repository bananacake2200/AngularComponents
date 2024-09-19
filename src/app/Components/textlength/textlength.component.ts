import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputString: string = '';  
  stringLength: number | null = null;  

  calculateLength() {
    this.stringLength = this.inputString.length;
  }
}
