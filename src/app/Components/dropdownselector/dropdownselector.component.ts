import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdownselector',
  templateUrl: './dropdownselector.component.html',
  styleUrl: './dropdownselector.component.css'
})
export class DropdownselectorComponent {
  selectedValue: string = '';

  options: string[] = ['House and Lot', 'Brand new car', '1 Million'];
}
