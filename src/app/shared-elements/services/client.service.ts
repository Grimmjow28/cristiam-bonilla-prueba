import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableElementInterface } from './table.element.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private _httpClient: HttpClient) { }

  getBanckProducts() {
    return this._httpClient.get<TableElementInterface[]>('http://localhost:3002/bp/products')
  }

}


