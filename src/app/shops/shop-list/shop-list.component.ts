import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/Service/communication.service';
import { ShopServiceService } from 'src/app/Service/shop-service.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent {
  shops: any = [];

  constructor(
    private _shopService: ShopServiceService,
    private _communicationService: CommunicationService
  ) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }
}
