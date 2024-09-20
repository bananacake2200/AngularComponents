import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string | null = null;
  uppercasedName: string | null = null;

  displayUppercaseName(): void {
    if (this.name) {
      this.uppercasedName = this.name.toUpperCase();
    }
  }
}
