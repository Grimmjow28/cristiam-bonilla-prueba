import { Component, OnInit } from '@angular/core';
import { InputElementComponent } from '../../shared-elements/input-element/input-element.component';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { InputElementInteface } from '../../shared-elements/interfaces/input.element.inteface';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent, ActionButtonInterface } from '../../shared-elements/action-button/action-button.component';
import { ClientService, RequestAddForm } from '../../shared-elements/services/client.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-add-bank-account',
  standalone: true,
  imports: [InputElementComponent, CommonModule, ActionButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './add-bank-account.component.html',
  styleUrl: './add-bank-account.component.scss'
})
export class AddBankAccountComponent implements OnInit {


  formfieldList: BankProductElemnt[] = [

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
      primary: true,
      couldDisabled: true
    }
  ]

  addForm: UntypedFormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private roter: Router){}

  ngOnInit(): void {

    this.formfieldList = [
      {
        main: new FormControl('', {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
          asyncValidators: [ IdValidator.verifyId(this.clientService) ]
        } ),
        complement: {
          label:'Id',
          placeholder: 'id..',
          type: 'text',
          errors: [
            { key: 'required', label: 'Este campo es requerido' },
            { key: 'minlength', label: 'Minimo 3 caracteres'},
            { key: 'maxlength', label: 'Maximo 3 caracteres'},
            { key: 'idAlreadyExist', label: 'ID no valido'}
          ]
        }
      },    
      {
        main: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
        complement: {
          label:'Nombre',
          placeholder: 'nombre..',
          type: 'text',
          errors: [
            { key: 'required', label: 'Este campo es requerido' },
            { key: 'minlength', label: 'Minimo 6 caracteres'},
            { key: 'maxlength', label: 'Maximo 100 caracteres'}
          ]
        }
      },
      {
        main: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
        complement: {
          label:'Descripcion',
          placeholder: 'descripcion..',
          type: 'text',
          errors: [
            { key: 'required', label: 'Este campo es requerido' },
            { key: 'minlength', label: 'Minimo 10 caracteres'},
            { key: 'maxlength', label: 'Maximo 200 caracteres'}
          ]
        }
      },
      {
        main: new FormControl('', [Validators.required]),
        complement: {
          label:'Logo',
          placeholder: 'descripcion..',
          type: 'text',
          errors: [
            { key: 'required', label: 'Este campo es requerido' }
          ]
        }
      },
      {
        main: new FormControl('', [Validators.required]),
        complement: {
          label:'Fecha de Liberacion',
          placeholder: 'dd/mm/yyyy..',
          type: 'date',
          errors: [
            { key: 'required', label: 'Este campo es requerido' }
          ]
        }
      },
      {
        main: new FormControl('', [Validators.required]),
        complement: {
          label:'Fecha de Revision',
          placeholder: 'dd/mm/yyyy..',
          type: 'date',
          errors: [
            { key: 'required', label: 'Este campo es requerido' }
          ]
        }
      }
    ];

    this.addForm = this.formBuilder.group({
      id: this.formfieldList[0].main,
      name: this.formfieldList[1].main,
      description: this.formfieldList[2].main,
      logo: this.formfieldList[3].main,
      date_release: this.formfieldList[4].main,
      date_revision: this.formfieldList[5].main
    })
  }

  catchClick(event: string | number | boolean) {
    if(event == 'Reiniciar') {
      this.addForm.reset();
    } else if (event == 'Enviar') {
      this.sendForm();
    }
  }

  sendForm() {
    let form: RequestAddForm = this.addForm.value;
    this.clientService.sendForm(form).subscribe(resp=> {
      if(resp.message == "Product added successfully") {
        this.roter.navigateByUrl('/bank-administrator')
      }
    }, error => {
      let message = error.message;
      alert(`${message}, Registro con Id duplicado`);
    });
  }
}

export interface BankProductElemnt {
  main: FormControl,
  complement: InputElementInteface
}

export class IdValidator {
  static verifyId(clienService: ClientService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return clienService.verifyId(control.value)
       .pipe(
           map((resp: boolean) => resp ? { idAlreadyExist: true } : null)
        );
    };
  }
}