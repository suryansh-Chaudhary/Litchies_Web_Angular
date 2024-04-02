import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/Home/home/home.component';
import { ShopsComponent } from './pages/particular-shop/shops.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { WishlistedProductsComponent } from './pages/wishlisted-products/wishlisted-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Shops/:id', component: ShopsComponent },
  { path: 'Shop List', component: ShopListComponent, canActivate: [authGuard] },
  { path: 'Products', component: AllProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'Login', component: LoginRegisterComponent },
  {
    path: 'wishlist',
    component: WishlistedProductsComponent,
    canActivate: [authGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [authGuard],
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
