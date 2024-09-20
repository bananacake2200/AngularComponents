import { Component } from '@angular/core';

@Component({
  selector: 'app-showhidetext',
  templateUrl: './showhidetext.component.html',
  styleUrl: './showhidetext.component.css'
})
export class ShowhidetextComponent {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
