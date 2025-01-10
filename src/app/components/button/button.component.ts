import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // @Output() btnClick = new EventEmitter();

  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    console.log('Button clicked!');
    this.btnClick.emit();
  }
}
