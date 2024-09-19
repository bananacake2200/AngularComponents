import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  userName: string = ''; 
  greetingMessage: string = '';  
  displayGreeting() {
    if (this.userName) {
      this.greetingMessage = `Hello, ${this.userName}. Have a wonderful day!`;
    } else {
      this.greetingMessage = '';  
    }
  }

}
