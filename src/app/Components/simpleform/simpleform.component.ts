import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submittedData: any = null;  // Variable to store submitted data

  // Method to handle form submission
  onSubmit() {
    this.submittedData = { ...this.formData };  // Clone the form data
    // Clear the form (optional)
    this.formData = { name: '', email: '', message: '' };
  }


}
