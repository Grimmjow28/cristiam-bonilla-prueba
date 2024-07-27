import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent implements OnInit {


  @Input() button: ActionButtonInterface = {
    label: 'Agregar',
    width: '90px',
    value: true,
    primary: true,
  };

  backGround = '';

  @Output() clickedButton: EventEmitter<string | number | boolean> = new EventEmitter();

  ngOnInit(): void {
    if (this.button.primary) this.backGround ='#FED353';
  }

  click() {
    this.clickedButton.emit(this.button.value);
  }

}

export interface ActionButtonInterface {
  label: string;
  width: string;
  value: string | number | boolean;
  primary: boolean;
}