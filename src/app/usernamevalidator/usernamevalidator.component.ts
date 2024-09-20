import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = ''; 
  isValid: boolean | null = null;  
  validationMessage: string = ''; 

   private readonly rules = {
    minLength: 5,
    maxLength: 15,
    regex: /^[a-zA-Z0-9_]+$/,  
  };

  
  validateUsername(): void {
    if (this.username.length < this.rules.minLength || this.username.length > this.rules.maxLength) {
      this.isValid = false;
      this.validationMessage = `Username must be between ${this.rules.minLength} and ${this.rules.maxLength} characters.`;
    } else if (!this.rules.regex.test(this.username)) {
      this.isValid = false;
      this.validationMessage = 'Username can only contain alphanumeric characters and underscores.';
    } else {
      this.isValid = true;
      this.validationMessage = 'Username is valid!';
    }
  }
}
