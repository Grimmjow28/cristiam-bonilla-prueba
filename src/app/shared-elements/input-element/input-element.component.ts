import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms'
import { InputElementInteface } from '../interfaces/input.element.inteface';

@Component({
  selector: 'app-input-element',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss'
})
export class InputElementComponent  {
  @Input() control: FormControl = new FormControl()
  @Input() controlConfiguration: InputElementInteface = {
    label:'',
    placeholder: '',
    type: 'text',
    errors: [
      { key: 'required', label: 'Este campo es requerido' },
    ]
  }
  @Input() useOnchange: boolean = false;
  @Output() catchEvent: EventEmitter<any> = new EventEmitter();

  hasError: boolean = false;

  content() {
    if(this.control.touched && this.control.errors && Object.keys(this.control.errors).length) {
      let errorReturned = '';
      let key = Object.keys(this.control.errors)[0];
      for(let element of this.controlConfiguration.errors) {
        if (element.key == key) {
          errorReturned = element.label;
          break;
        }
      }
      this.hasError = true;
      return errorReturned;
    } else {
      this.hasError = false;
      return ''
    }
  }

  change($event:any) {
    if (this.useOnchange) {
      const newValue = ($event.target as HTMLInputElement).value;
      this.catchEvent.emit({event: 'change', value: newValue});
    }
  }
}


