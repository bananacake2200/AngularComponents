import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorgenerator',
  templateUrl: './randomcolorgenerator.component.html',
  styleUrl: './randomcolorgenerator.component.css'
})
export class RandomcolorgeneratorComponent {
  color: string = '#FFFFFF'; // Default color
  hexCode: string = '';

  generateRandomColor(): void {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.color = `#${randomColor.padStart(6, '0')}`;
    this.hexCode = this.color; // Store the hex code
  }
}
