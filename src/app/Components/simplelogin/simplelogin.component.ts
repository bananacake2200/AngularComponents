import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';     
  password: string = '';  
  message: string = '';   

  login() {
    if (this.email && this.password) {
      this.message = `Logged in successfully!`;
    } else {
      this.message = 'Please enter both email and password.';
    }
  }
}
