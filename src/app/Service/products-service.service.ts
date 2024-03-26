import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://localhost:5000/';

  getAllProducts() {
    return this._http.get(this.baseUrl + 'product', {
      responseType: 'json',
    });
  }
}
