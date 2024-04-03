import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { BannersServiceService } from 'src/app/services/banners-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  banners: any = [];

  constructor(private _bannerService: BannersServiceService) {
    _bannerService
      .getBanners()
      .pipe(
        tap((res) => {
          this.banners = res;
        })
      )
      .subscribe();

    // _bannerService.getBanners().subscribe((res) => {
    //   this.banners = res;
    // });
  }
}
