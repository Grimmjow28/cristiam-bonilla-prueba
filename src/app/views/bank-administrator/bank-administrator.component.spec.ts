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
    component.originalBankList= [
        {
          date_release: "2024-06-01",
          date_revision: "2024-06-26",
          description: "soy el mejor",
          id: "111",
          logo: "asset2",
          name: "camilo"
        },
        {
          date_release: "2024-07-01",
          date_revision: "2024-07-06",
          description: "otro gran apellido 1",
          id:"333",
          logo: "asset4 1",
          name: "angarita 1"
        }
    ]
    component.filteredBankList  = component.originalBankList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('catch change', () => {
    component.catchChange({value: 'c', event: 'change'});
    expect(component.filteredBankList.length).toBe(1)
  });
});
