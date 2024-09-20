import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  tasks: string[] = [];  
  newTask: string = ''; 

  
  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; 
    }
  }

  
  removeTask(index: number): void {
    this.tasks.splice(index, 1);  
  }
}
