import { Component, input, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-input-element',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss'
})
export class InputElementComponent {
  @Input() control: FormControl = new FormControl()
  @Input() controlConfiguration: any = {
    label:'',
    placeholder: '',
    inputType: 'text',
  }

}
