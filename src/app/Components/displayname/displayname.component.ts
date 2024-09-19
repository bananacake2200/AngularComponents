import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  userName: string = '';  
  displayedName: string = ''; 

  displayUserName() {
    this.displayedName = this.userName;
  }

}
