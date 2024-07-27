import { Component, OnInit } from '@angular/core';
import { InputElementComponent } from "../../shared-elements/input-element/input-element.component";
import { TableElementComponent } from "../../shared-elements/table-element/table-element.component";
import { FormControl } from '@angular/forms';
import { ClientService } from '../../shared-elements/services/client.service';
import { TableElementInterface } from '../../shared-elements/services/table.element.interface';
import { InputElementInteface } from '../../shared-elements/interfaces/input.element.inteface';
import { ActionButtonComponent } from '../../shared-elements/action-button/action-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-administrator',
  standalone: true,
  imports: [InputElementComponent, InputElementComponent, TableElementComponent, ActionButtonComponent],
  templateUrl: './bank-administrator.component.html',
  styleUrl: './bank-administrator.component.scss'
})
export class BankAdministratorComponent implements OnInit {

  originalBankList: TableElementInterface[] = [];


  filter: FormControl = new FormControl('');
  filterComplement: InputElementInteface = {
    placeholder: 'Search..',
    type: 'text'
  }

  constructor(private clientService: ClientService, private roter: Router) {}

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks() {
    this.clientService.getBanckProducts().subscribe(response => {
      this.originalBankList = response.data
    })
  }

  addBankProduct() {
    this.roter.navigateByUrl('/add-bank-product')

  }
}
