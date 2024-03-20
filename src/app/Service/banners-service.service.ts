import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BannersServiceService {
  constructor(private _http: HttpClient) {}
  baseUrl = 'http://localhost:5000/';

  getBanners() {
    return this._http.get(this.baseUrl + 'shopBanner', {
      responseType: 'json',
    });
  }
}
