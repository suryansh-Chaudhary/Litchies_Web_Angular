import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://api.litchies.com:5000/';

  userLogin(mobile: any, password: any) {
    return this._http.post(
      this.baseUrl + 'auth/login',
      {
        mobile: mobile,
        password: password,
      },
      {
        responseType: 'json',
      }
    );
  }

  resetPassword(mobile: any) {
    return this._http.post(
      this.baseUrl + 'auth/forgot',
      {
        mobile: mobile,
      },
      {
        responseType: 'json',
      }
    );
  }
}
