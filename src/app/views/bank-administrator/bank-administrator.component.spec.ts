import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdministratorComponent } from './bank-administrator.component';

describe('BankAdministratorComponent', () => {
  let component: BankAdministratorComponent;
  let fixture: ComponentFixture<BankAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAdministratorComponent]
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
