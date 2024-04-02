import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: any = [];

  constructor(private _productService: ProductsServiceService) {
    _productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
