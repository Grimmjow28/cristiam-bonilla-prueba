import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdministratorComponent } from './bank-administrator.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BankAdministratorComponent', () => {
  let component: BankAdministratorComponent;
  let fixture: ComponentFixture<BankAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAdministratorComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() ]   
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
