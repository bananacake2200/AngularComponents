import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleswitch',
  templateUrl: './toggleswitch.component.html',
  styleUrl: './toggleswitch.component.css'
})
export class ToggleswitchComponent {
  isOn: boolean = false;

  toggle() {
    this.isOn = !this.isOn;
  }
}
