import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/Service/shop-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  shops: any = [];

  constructor(private _shopService: ShopServiceService) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }
}
