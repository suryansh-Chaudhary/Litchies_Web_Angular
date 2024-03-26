import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopServiceService } from 'src/app/Service/shop-service.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  products: any = [];
  shopInfo: any = [];
  shopId: any = '';
  shopName: any = 'hi';

  constructor(
    private _shopService: ShopServiceService,
    private _route: ActivatedRoute
  ) {
    //Fetch Shop Details
    this._shopService.getShopInfo(this.shopId).subscribe((res) => {
      this.shopInfo = res;
      // this.shopName = this.shopInfo.data.name;
      // this.shopName = this.shopInfo.name;
      // console.log(this.shopName);
    });
  }
  ngOnInit() {
    // Retrieve shop ID from the route parameters
    this._route.paramMap.subscribe((params) => {
      this.shopId = parseInt(params.get('id')!, 10); // Assuming 'id' is the parameter name
      // Fetch All Products of the Shop
      this._shopService.getProducts(this.shopId).subscribe((res) => {
        this.products = res;
      });
    });
  }
}
