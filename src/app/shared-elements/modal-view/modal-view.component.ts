import { Component } from '@angular/core';
import { ActionButtonComponent, ActionButtonInterface } from '../action-button/action-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [ActionButtonComponent, CommonModule],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss'
})
export class ModalViewComponent {

  buttons: ActionButtonInterface[] = [
    {
      label: 'Cancelar',
      width: '120px',
      value: 'reset',
      primary: false
    },
    {
      label: 'Confirmar',
      width: '120px',
      value: 'reset',
      primary: true,
      couldDisabled: true
    }
  ]

}
