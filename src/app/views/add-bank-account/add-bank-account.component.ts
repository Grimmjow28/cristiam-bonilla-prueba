import { Component } from '@angular/core';
import { InputElementComponent } from '../../shared-elements/input-element/input-element.component';
import { FormControl, Validators } from '@angular/forms';
import { InputElementInteface } from '../../shared-elements/interfaces/input.element.inteface';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent, ActionButtonInterface } from '../../shared-elements/action-button/action-button.component';

@Component({
  selector: 'app-add-bank-account',
  standalone: true,
  imports: [InputElementComponent, CommonModule, ActionButtonComponent],
  templateUrl: './add-bank-account.component.html',
  styleUrl: './add-bank-account.component.scss'
})
export class AddBankAccountComponent {

  formfieldList: BankProductElemnt[] = [
    {
      main: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      complement: {
        label:'Id',
        placeholder: 'id..',
        type: 'text'
      }
    },    
    {
      main: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      complement: {
        label:'Nombre',
        placeholder: 'nombre..',
        type: 'text'
      }
    },
    {
      main: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
      complement: {
        label:'Descripcion',
        placeholder: 'descripcion..',
        type: 'text'
      }
    },
    {
      main: new FormControl('', [Validators.required]),
      complement: {
        label:'Logo',
        placeholder: 'descripcion..',
        type: 'text'
      }
    },
    {
      main: new FormControl('', [Validators.required]),
      complement: {
        label:'Fecha de Liberacion',
        placeholder: 'dd/mm/yyyy..',
        type: 'date'
      }
    },
    {
      main: new FormControl('', [Validators.required]),
      complement: {
        label:'Fecha de Revision',
        placeholder: 'dd/mm/yyyy..',
        type: 'date'
      }
    }
  ]

  buttons: ActionButtonInterface[] = [
    {
      label: 'Reiniciar',
      width: '120px',
      value: 'reset',
      primary: false
    },
    {
      label: 'Enviar',
      width: '120px',
      value: 'reset',
      primary: true
    }
  ]


}

export interface BankProductElemnt {
  main: FormControl,
  complement: InputElementInteface
}
