import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don't happen. You create them."
  ];

  selectedQuote: string | null = null;

  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];
  }
}
