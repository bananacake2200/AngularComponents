import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  message: string = '';  // Variable to store the message

  // Method to update the message
  displayMessage() {
    this.message = 'Hello World';
  }

}
