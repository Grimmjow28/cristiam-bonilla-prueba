import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableElementInterface } from './table.element.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private _httpClient: HttpClient) { }

  options = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    }
  }

  getBanckProducts() {
    return this._httpClient.get<ResponseRequest>('http://localhost:3002/bp/products', this.options)
  }

  sendForm(addForm: RequestAddForm) {
    return this._httpClient.post<ResponseRequest>('http://localhost:3002/bp/products', addForm, this.options)

  }

}

export interface ResponseRequest {
  data: any [];
  message?: string;
}

export interface RequestAddForm {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}
