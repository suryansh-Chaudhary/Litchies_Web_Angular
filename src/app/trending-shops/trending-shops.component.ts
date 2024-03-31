import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../Service/shop-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-shops',
  templateUrl: './trending-shops.component.html',
  styleUrls: ['./trending-shops.component.css'],
})
export class TrendingShopsComponent {
  shops: any = [];
  currentPosition = 0;
  maxPosition = 0;
  constructor(
    private _shopService: ShopServiceService,
    private _router: Router
  ) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }

  handleLeftClick() {
    const container = document.querySelector('.shop-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft -= 250;
    } else {
      container!.scrollLeft -= 100;
    }
  }

  handleRightClick() {
    const container = document.querySelector('.shop-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft += 250;
    } else {
      container!.scrollLeft += 100;
    }
  }

  goToShop(id: any) {
    this._router.navigate(['Shops', id]);
  }
}
