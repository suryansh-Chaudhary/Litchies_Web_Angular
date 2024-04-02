import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.css'],
})
export class TrendingCategoriesComponent {
  categories: any = [];
  constructor(
    private _categoryService: ProductsServiceService,
    private _router: Router
  ) {
    _categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  handleLeftClick() {
    const container = document.querySelector('.category-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft -= 250;
    } else {
      container!.scrollLeft -= 100;
    }
  }

  handleRightClick() {
    const container = document.querySelector('.category-container');
    if (window.innerWidth > 700) {
      container!.scrollLeft += 250;
    } else {
      container!.scrollLeft += 100;
    }
  }

  goToCategories() {
    this._router.navigateByUrl('/categories');
  }
}
