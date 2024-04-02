import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopServiceService } from 'src/app/services/shop-service.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent {
  products: any = [];
  shopInfo: any = [];
  shopId: any = '';
  shopName: any = '';
  shopAddress: any = '';
  shopBgImg: any = '';
  shopImg: any = '';

  constructor(
    private _shopService: ShopServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    // Retrieve shop ID from the route parameters
    this._route.paramMap.subscribe((params) => {
      this.shopId = params.get('id')!; // Assuming 'id' is the parameter name
      // Fetch All Products of the Shop
      this._shopService.getProducts(this.shopId).subscribe((res) => {
        this.products = res;
      });
    });

    //Fetch Shop Details
    this._shopService.getShopInfo(this.shopId).subscribe((res) => {
      this.shopInfo = res;
      this.shopName = this.shopInfo.data.name;
      this.shopAddress = this.shopInfo.data.address;
      this.shopBgImg = this.shopInfo.data.shopBgThumbnail;
      this.shopImg = this.shopInfo.data.shopThumbnail;
      // this.shopName = this.shopInfo.data.name;
      // this.shopName = this.shopInfo.name;
      // console.log(this.shopName);
    });
  }

  productClick(productId: any) {
    this._router.navigate(['product', productId]);
  }
}
