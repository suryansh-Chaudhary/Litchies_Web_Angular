import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ShopListComponent } from './shops/shop-list/shop-list.component';
import { ShopsComponent } from './shops/particular-shop/shops.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { WishlistedProductsComponent } from './wishlisted-products/wishlisted-products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Shops/:id', component: ShopsComponent },
  { path: 'Shop List', component: ShopListComponent, canActivate: [authGuard] },
  { path: 'Products', component: AllProductsComponent },
  { path: 'Login', component: LoginRegisterComponent },
  {
    path: 'wishlist',
    component: WishlistedProductsComponent,
    canActivate: [authGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
