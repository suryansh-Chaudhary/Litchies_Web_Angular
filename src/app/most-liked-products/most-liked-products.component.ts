import { Component } from '@angular/core';

@Component({
  selector: 'app-most-liked-products',
  templateUrl: './most-liked-products.component.html',
  styleUrls: ['./most-liked-products.component.css'],
})
export class MostLikedProductsComponent {
  currentPosition = 0;
  maxPosition = 0;

  handleLeftClick() {
    if (this.currentPosition > 0) {
      this.currentPosition -= 150; // Adjust slide amount based on your content width
      this.slideContent();
    }
  }

  handleRightClick() {
    if (this.currentPosition <= this.maxPosition) {
      this.currentPosition += 150; // Adjust slide amount based on your content width
      this.slideContent();
    }
  }

  // Function to slide the content
  slideContent() {
    const contentElement = document.querySelector(
      '.product-container'
    ) as HTMLDivElement;
    if (contentElement) {
      contentElement.scrollTo({
        left: this.currentPosition,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit() {
    // Calculate maximum allowed position based on content width
    const cards = document.querySelectorAll('.card');
    let contentWidth = 0;
    for (let card of Array.from(cards)) {
      contentWidth += card.clientWidth;
    }
    const containerWidth =
      document.querySelector('.product-container')?.clientWidth || 0;
    this.maxPosition = Math.max(contentWidth, containerWidth); // Prevent exceeding container width
  }
}
