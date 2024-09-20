import { Component } from '@angular/core';

@Component({
  selector: 'app-randomjokegenerator',
  templateUrl: './randomjokegenerator.component.html',
  styleUrl: './randomjokegenerator.component.css'
})
export class RandomjokegeneratorComponent {
  jokes: string[] = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t skeletons fight each other? They don’t have the guts."
  ];

  currentJoke: string = '';

  getRandomJoke(): void {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    this.currentJoke = this.jokes[randomIndex];
  }
}
