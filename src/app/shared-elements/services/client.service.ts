import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestAddForm, ResponseRequest } from '../interfaces/response.interface';

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

  verifyId(id: string) {
    return this._httpClient.get<boolean>(`http://localhost:3002/bp/products/verification/${id}`, this.options)
  }

  deleteProduct(id: string) {
    return this._httpClient.delete<ResponseRequest>(`http://localhost:3002/bp/products/${id}`, this.options)
  }

  editForm(addForm: RequestAddForm, id: string) {
    return this._httpClient.put<ResponseRequest>(`http://localhost:3002/bp/products/${id}`, addForm, this.options)
  }

}

