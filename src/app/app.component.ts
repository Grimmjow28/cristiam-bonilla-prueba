import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared-elements/header/header.component";
import { ModalViewComponent } from './shared-elements/modal-view/modal-view.component';
import { StoreModalService } from './shared-elements/services/store-modal.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, ModalViewComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'cristiam-bonilla-prueba';

  showModal: Observable<boolean> = of(false)

  constructor(private storeModalService: StoreModalService) {}

  ngOnInit(): void {
    this.showModal = this.storeModalService.openModal$;
  }
}
