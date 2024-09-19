import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';  
  isPalindrome: boolean | null = null; 


  checkPalindrome() {
    const cleanedWord = this.inputWord.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const reversedWord = cleanedWord.split('').reverse().join('');  
    this.isPalindrome = cleanedWord === reversedWord; 
  }
}
