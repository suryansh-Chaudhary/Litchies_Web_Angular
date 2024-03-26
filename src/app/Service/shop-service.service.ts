import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopServiceService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://localhost:5000/';

  getShopsForLandingPage() {
    return this._http.get(this.baseUrl + 'shops', {
      responseType: 'json',
    });
  }

  getProducts(shopId: any) {
    return this._http.get(this.baseUrl + `product/?id=${shopId}`, {
      responseType: 'json',
    });
  }

  getShopInfo(shopId: any) {
    return this._http.get(this.baseUrl + `shops/${shopId}`, {
      responseType: 'json',
    });
  }
}
