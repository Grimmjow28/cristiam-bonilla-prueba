import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  filteredBankList: TableElementInterface[] = [];

  filter: FormControl = new FormControl('');
  filterComplement: InputElementInteface = {
    placeholder: 'Search..',
    type: 'text',
    errors: []
  }

  constructor(private clientService: ClientService, private roter: Router) {}

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks() {
    this.clientService.getBanckProducts().subscribe(response => {
      this.originalBankList = response.data;
      this.filteredBankList = this.originalBankList;
    })
  }

  addBankProduct() {
    this.roter.navigateByUrl('/add-bank-product')
  }

  catchChange($event: any) {
    if ($event.event == 'change') {
      if ($event.value != '') {
        this.filteredBankList = this.originalBankList.filter(element => element.name.includes($event.value));
      } else {
        this.filteredBankList = this.originalBankList;
      }
    }
  }
}
