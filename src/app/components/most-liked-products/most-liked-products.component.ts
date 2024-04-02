import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/services/shop-service.service';

@Component({
  selector: 'app-most-liked-products',
  templateUrl: './most-liked-products.component.html',
  styleUrls: ['./most-liked-products.component.css'],
})
export class MostLikedProductsComponent {
  products: any = [];

  constructor(private _shopService: ShopServiceService) {
    _shopService.getProducts('66014a81288cbd86c7c6b4dd').subscribe((res) => {
      this.products = res;
    });
  }

  handleLeftClick() {
    const container = document.querySelector('.product-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft -= 250;
    } else {
      container!.scrollLeft -= 100;
    }
  }

  handleRightClick() {
    const container = document.querySelector('.product-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft += 250;
    } else {
      container!.scrollLeft += 100;
    }
  }
}
