import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionButtonComponent, ActionButtonInterface } from '../action-button/action-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ActionButtonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  @Input() acciones: ActionButtonInterface[] = [
    {
      label: 'Editar',
      width: '120px',
      value: 'reset',
      primary: false
    },
    {
      label: 'Eliminar',
      width: '120px',
      value: 'reset',
      primary: false,
    }
  ]

  menu: ActionButtonInterface = {
    label: 'Menu =>',
    width: '120px',
    value: 'reset',
    primary: false
  };

  show:boolean = false;

  @Output() selected:  EventEmitter<string> = new EventEmitter();

  showMenu() {
    this.show = !this.show;
  }

  selectedButton(label: string) {
    this.selected.emit(label);
    this.showMenu();
  }
}
