import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { ShopServiceService } from 'src/app/services/shop-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productId: any = '';
  productDetails: any = [];
  shopDetails: any = [];
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsServiceService,
    private _shopService: ShopServiceService
  ) {
    // Retrieve Product ID from the route parameters
    this._route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!; // Assuming 'id' is the parameter name
      // Fetch All Products of the Shop
      this._productService.getProductById(this.productId).subscribe((res) => {
        this.productDetails = res;

        const shopId = this.productDetails.data.shopId;
        _shopService.getShopInfo(shopId).subscribe((res) => {
          this.shopDetails = res;
        });
      });
    });
  }
}
