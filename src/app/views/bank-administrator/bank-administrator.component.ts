import { Component } from '@angular/core';
import { InputElementComponent } from "../../shared-elements/input-element/input-element.component";
import { TableElementComponent } from "../../shared-elements/table-element/table-element.component";

@Component({
  selector: 'app-bank-administrator',
  standalone: true,
  imports: [InputElementComponent, InputElementComponent, TableElementComponent],
  templateUrl: './bank-administrator.component.html',
  styleUrl: './bank-administrator.component.scss'
})
export class BankAdministratorComponent {

}
