import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/Service/shop-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  shops: any = [];

  constructor(
    private _shopService: ShopServiceService,
    private _router: Router
  ) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }

  // This method will call when user click on Wish List Icon
  WishListIconClick() {
    const token = localStorage.getItem('access_token');
    // Check if token exists and is not null or empty
    if (!token || token.trim() === '') {
      alert('Login to see wishlist!!');
      this._router.navigateByUrl('Login');
    } else {
      this._router.navigateByUrl('wishlist');
    }
  }

  // This method will call when user click on Cart Icon
  CartIconClick() {
    const token = localStorage.getItem('access_token');
    // Check if token exists and is not null or empty
    if (!token || token.trim() === '') {
      alert('Login to see Cart!!');
      this._router.navigateByUrl('Login');
    } else {
      this._router.navigateByUrl('cart');
    }
  }
}
