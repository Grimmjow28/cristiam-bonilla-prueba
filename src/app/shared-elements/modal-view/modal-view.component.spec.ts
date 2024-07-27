import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewComponent } from './modal-view.component';
import { ClientService } from '../services/client.service';
import { StoreModalService } from '../services/store-modal.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';


describe('ModalViewComponent', () => {
  let component: ModalViewComponent;
  let fixture: ComponentFixture<ModalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalViewComponent],
      providers: [
         provideHttpClient(),
        provideHttpClientTesting() ,
        StoreModalService,ClientService]        
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
