import { Component, OnInit } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { StoreModalService } from '../services/store-modal.service';
import { Observable, of } from 'rxjs';
import { ClientService } from '../services/client.service';
import { ActionButtonInterface } from '../interfaces/action.button.interface';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [ActionButtonComponent, CommonModule],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss'
})
export class ModalViewComponent implements OnInit {

  buttons: ActionButtonInterface[] = [
    {
      label: 'Cancelar',
      width: '120px',
      value: 'cancelar',
      primary: false
    },
    {
      label: 'Confirmar',
      width: '120px',
      value: 'confirmar',
      primary: true,
      couldDisabled: true
    }
  ]

  idDelete: string = '';

  nombre: Observable<string>  = of('')

  constructor(private storeModalService: StoreModalService, private clientService: ClientService) {}

  ngOnInit(): void {
    this.storeModalService._id$.subscribe(id => this.idDelete = id)
    this.nombre = this.storeModalService._title$;
  }

  closeModal() {
    this.storeModalService.openModal(false);
  }

  DeleteElement() {
    this.clientService.deleteProduct(this.idDelete).subscribe(respo => {
      if(respo.message && !respo.name) {
        this.closeModal();
        alert(respo.message);
        this.storeModalService.reloadTable(true);
      } else {
        alert(respo.message);
      }
    });
  }

  catchEvent($event: string | number | boolean) {
    if ($event == 'cancelar') {
      this.closeModal();
    } else if ($event == 'confirmar') {
      this.DeleteElement();      
    }
  }
}
