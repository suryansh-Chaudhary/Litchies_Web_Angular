import { Component } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userInfo: any;
  constructor() {
    this.userInfo = localStorage.getItem('user_info');
    this.userInfo = jwt_decode.jwtDecode(this.userInfo);
    // console.log(this.userInfo);
  }

  logOutClick() {
    localStorage.removeItem('access_token');
  }
}
