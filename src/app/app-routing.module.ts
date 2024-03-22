import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ShopListComponent } from './shops/shop-list/shop-list.component';
import { ShopsComponent } from './shops/particular-shop/shops.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Shops',
    component: ShopsComponent,
  },
  {
    path: 'Shop List',
    component: ShopListComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
