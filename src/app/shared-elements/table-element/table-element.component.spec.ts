import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { TableElementComponent } from './table-element.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { StoreModalService } from '../services/store-modal.service';

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

  it('edit', ()  => {
    component.action('Editar',{
      date_release: "2024-07-01",
      date_revision: "2024-07-06",
      description: "otro gran apellido 1",
      id:"333",
      logo: "asset4 1",
      name: "angarita 1"
    });
    let service = fixture.componentRef.injector.get(StoreModalService);
    service._elementToEdit$.subscribe(element => {
      expect(element.date_release).toBe("2024-07-01")
    })

  })

  it('action open', () => {
    component.action('Eliminar', {date_release: "2024-07-01",
      date_revision: "2024-07-06",
      description: "otro gran apellido 1",
      id:"333",
      logo: "asset4 1",
      name: "angarita 1"});
    let service = fixture.componentRef.injector.get(StoreModalService);
    service.id$.subscribe(id => {
      expect(id).toBe("333")
    })
    service.title$.subscribe(title => {
      expect(title).toBe("angarita 1")
    })
    service.openModal$.subscribe(open => {
      expect(open).toBeTrue();
    })
  })

  it('change page ', () => {
    component.maxPages = 2;
    component.changePage(1);
    expect(component.page).toBe(2);
  })

  it ('select value', () => {
    component.SelectValue({value: '10'});
    expect(component.numberElements).toBe(10);
    expect(component.numberElements).toBe(component.final);
    expect(component.initial).toBe(1);
  })
});
