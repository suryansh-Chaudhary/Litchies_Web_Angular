import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/services/shop-service.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent {
  shops: any = [];

  constructor(
    private _shopService: ShopServiceService,
    private _router: Router
  ) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }

  goToShop(id: any) {
    this._router.navigate(['Shops', id]);
  }
}
