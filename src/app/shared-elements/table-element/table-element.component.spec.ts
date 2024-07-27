import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableElementComponent } from './table-element.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TableElementComponent', () => {
  let component: TableElementComponent;
  let fixture: ComponentFixture<TableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableElementComponent],
      providers: [
       provideHttpClient(),
       provideHttpClientTesting() ]      
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
