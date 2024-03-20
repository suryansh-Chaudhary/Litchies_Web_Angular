import { Component } from '@angular/core';
import { ShopServiceService } from '../Service/shop-service.service';

@Component({
  selector: 'app-trending-shops',
  templateUrl: './trending-shops.component.html',
  styleUrls: ['./trending-shops.component.css'],
})
export class TrendingShopsComponent {
  shops: any = [];
  currentPosition = 0;
  maxPosition = 0;
  constructor(private _shopService: ShopServiceService) {
    _shopService.getShopsForLandingPage().subscribe((res) => {
      this.shops = res;
    });
  }

  handleLeftClick() {
    // Calculate maximum allowed position based on content width
    const cards = document.querySelectorAll('[id=card-shops]');
    let contentWidth = 0;
    for (let card of Array.from(cards)) {
      contentWidth += card.clientWidth;
    }

    const containerWidth =
      document.querySelector('.shop-container')?.clientWidth || 0;
    this.maxPosition = Math.max(contentWidth, containerWidth); // Prevent exceeding container width

    if (this.currentPosition > 0) {
      this.currentPosition -= 150; // Adjust slide amount based on your content width
      this.slideContent();
    }
  }

  handleRightClick() {
    // Calculate maximum allowed position based on content width
    const cards = document.querySelectorAll('[id=card-shops]');
    let contentWidth = 0;
    for (let card of Array.from(cards)) {
      contentWidth += card.clientWidth;
    }

    const containerWidth =
      document.querySelector('.shop-container')?.clientWidth || 0;
    this.maxPosition = Math.max(contentWidth, containerWidth); // Prevent exceeding container width
    let tempWidth = this.maxPosition - containerWidth / 2;
    if (this.currentPosition < tempWidth) {
      this.currentPosition += 150; // Adjust slide amount based on your content width
      this.slideContent();
    }
  }

  // Function to slide the content
  slideContent() {
    const contentElement = document.querySelector(
      '.shop-container'
    ) as HTMLDivElement;
    if (contentElement) {
      contentElement.scrollTo({
        left: this.currentPosition,
        behavior: 'smooth',
      });
    }
  }
}
