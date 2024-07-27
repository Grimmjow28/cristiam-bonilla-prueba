import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableElementInterface } from '../services/table.element.interface';
import { TableElementPaginator } from '../interfaces/table.element.paginator';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-table-element',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './table-element.component.html',
  styleUrl: './table-element.component.scss'
})
export class TableElementComponent implements OnInit, OnChanges {


  @Input() elementsToShow: TableElementInterface[] = [];
  numberElements = 5;
  page = 1;
  maxPages: number = 1;

  initial: number = 1
  final: number = this.numberElements;

  elementsTable: TableElementInterface[] = [];

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

  ngOnInit(): void {
    this.setElements();
    this.calcMaxPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setElements();
    this.calcMaxPages();
  }

  calcMaxPages() {
    this.maxPages = Math.ceil(this.elementsToShow.length / this.numberElements);
  }

  setElements() {
    this.initial = this.page*this.numberElements - this.numberElements;
    this.final = this.page*this.numberElements;
    this.elementsTable = this.elementsToShow.slice(this.initial,this.final);
  }

  changePage(move: number) {
    this.page = this.page + move;
    if (this.page <1) this.page = 1;
    if (this.page > this.maxPages) this.page = this.maxPages;
    this.setElements();
  }

  SelectValue(target: any) {
    let newP = Number(target.value);
    this.numberElements = newP;
    this.final = this.numberElements;
    this.initial = 1;
    this.calcMaxPages();
    this.setElements();
  }

  action($event: string) {
    if($event == 'Eliminar') {

    }
  }

  openModal() {
    
  }



}


