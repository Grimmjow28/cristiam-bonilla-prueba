import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

}

export interface TableElementInterface {
  id: string;
  name: string;
  descripton: string;
  logo: string;
  dateRelease: string;
  dateRevision: string; 
}