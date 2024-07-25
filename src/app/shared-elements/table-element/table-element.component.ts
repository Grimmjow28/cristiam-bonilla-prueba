import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableElementInterface } from '../services/table.element.interface';
import { TableElementPaginator } from '../interfaces/table.element.paginator';

@Component({
  selector: 'app-table-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-element.component.html',
  styleUrl: './table-element.component.scss'
})
export class TableElementComponent {

  @Input() elementsToShow: TableElementInterface[] = [
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    }
    , {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    }
    , {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    },
    {
      id: 'uno',
      name: 'gato',
      descripton: 'es un gato muy cool',
      logo: 'asset-1',
      dateRelease: '2025-01-01',
      dateRevision: '2025-01-30', 
    }
  ];

  amountToShow: TableElementPaginator[]= [
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    },
    {
      value: 20,
      label: '20'
    },
  ]

}


