import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './Home/home/home.component';
import { MostLikedProductsComponent } from './most-liked-products/most-liked-products.component';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, HomeComponent, MostLikedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }