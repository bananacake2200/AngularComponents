import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = 0;  
  userGuess: number | null = null;  
  feedback: string = '';  
  guessCount: number = 0;  

  ngOnInit(): void {
    this.resetGame(); 
  }

   
  resetGame(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;  
    this.userGuess = null;
    this.feedback = '';
    this.guessCount = 0;
  }

  
  checkGuess(): void {
    if (this.userGuess === null) {
      return;
    }

    this.guessCount++; 

    if (this.userGuess < this.randomNumber) {
      this.feedback = 'Too low! Try again.';
    } else if (this.userGuess > this.randomNumber) {
      this.feedback = 'Too high! Try again.';
    } else {
      this.feedback = `Correct! The number was ${this.randomNumber}. You guessed it in ${this.guessCount} attempts!`;
    }
  }
}
