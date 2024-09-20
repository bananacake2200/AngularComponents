import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  shoppingList: string[] = []; 
  newItem: string = '';  

  
  addItem(): void {
    if (this.newItem.trim()) {
      this.shoppingList.push(this.newItem.trim());
      this.newItem = '';  
    }
  }

   
  removeItem(index: number): void {
    this.shoppingList.splice(index, 1); 
  }
}
