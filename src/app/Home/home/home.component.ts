import { Component } from '@angular/core';
import { BannersServiceService } from 'src/app/Service/banners-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  banners: any = [];

  constructor(private _bannerService: BannersServiceService) {
    _bannerService.getBanners().subscribe((res) => {
      this.banners = res;
    });
  }
}
