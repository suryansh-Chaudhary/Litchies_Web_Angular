import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { MostLikedProductsComponent } from './components/most-liked-products/most-liked-products.component';
import { TrendingCategoriesComponent } from './components/trending-categories/trending-categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrendingShopsComponent } from './components/trending-shops/trending-shops.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopsComponent } from './pages/particular-shop/shops.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginSuccessfullyComponent } from './components/SnackBar/login-successfully/login-successfully.component';
import { LogOutSuccessfullyComponent } from './components/SnackBar/log-out-successfully/log-out-successfully.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { WishlistedProductsComponent } from './pages/wishlisted-products/wishlisted-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { MessageBoxComponent } from './components/DialogBox/message-box/message-box.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    CategoriesComponent,
    ProductComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MatSnackBarModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
