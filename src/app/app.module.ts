import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './Home/home/home.component';
import { MostLikedProductsComponent } from './most-liked-products/most-liked-products.component';
import { TrendingCategoriesComponent } from './trending-categories/trending-categories.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrendingShopsComponent } from './trending-shops/trending-shops.component';
import { ShopListComponent } from './shops/shop-list/shop-list.component';
import { ShopsComponent } from './shops/particular-shop/shops.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginSuccessfullyComponent } from './SnackBar/login-successfully/login-successfully.component';
import { LogOutSuccessfullyComponent } from './SnackBar/log-out-successfully/log-out-successfully.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WishlistedProductsComponent } from './wishlisted-products/wishlisted-products.component';
import { CartComponent } from './cart/cart.component';
import { MessageBoxComponent } from './DialogBox/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MostLikedProductsComponent,
    TrendingCategoriesComponent,
    FooterComponent,
    TrendingShopsComponent,
    ShopsComponent,
    ShopListComponent,
    AllProductsComponent,
    LoginRegisterComponent,
    PageNotFoundComponent,
    LoginSuccessfullyComponent,
    LogOutSuccessfullyComponent,
    WishlistedProductsComponent,
    CartComponent,
    MessageBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
