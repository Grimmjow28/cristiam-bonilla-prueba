import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankAccountComponent } from './add-bank-account.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AddBankAccountComponent', () => {
  let component: AddBankAccountComponent;
  let fixture: ComponentFixture<AddBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBankAccountComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]   
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
