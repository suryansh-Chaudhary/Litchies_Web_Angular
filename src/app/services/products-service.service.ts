import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://api.litchies.com:5000/';

  getAllProducts() {
    return this._http.get(this.baseUrl + 'product', {
      responseType: 'json',
    });
  }

  // Getting Particular Product using Product ID
  getProductById(productId: any) {
    return this._http.get(this.baseUrl + `product/${productId}`, {
      responseType: 'json',
    });
  }

  // Getting all the Product Categories
  getCategories() {
    return this._http.get(this.baseUrl + 'productCategory', {
      responseType: 'json',
    });
  }
}
