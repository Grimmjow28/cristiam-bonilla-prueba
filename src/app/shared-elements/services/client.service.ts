import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableElementInterface } from './table.element.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private _httpClient: HttpClient) { }

  // options = {
  //   headers: new HttpHeaders().append('Access-Control-Allow-Origin:', '*')
  // };

  getBanckProducts() {
    return this._httpClient.get<ResponseRequest>('http://localhost:3002/bp/products', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      }
    })
  }

}

export interface ResponseRequest {
  data: any []
}


