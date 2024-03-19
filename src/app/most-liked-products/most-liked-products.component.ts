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
      this.currentPosition -= 100; // Adjust slide amount based on your content width
      this.slideContent();
    }
  }

  handleRightClick() {
    // if (this.currentPosition < this.maxPosition) {
    //   this.currentPosition += 100; // Adjust slide amount based on your content width
    //   this.slideContent();
    // }
    this.currentPosition += 100; // Adjust slide amount based on your content width
    this.slideContent();
  }

  // Function to slide the content
  slideContent() {
    const contentElement = document.querySelector(
      '.product-container'
    ) as HTMLDivElement;
    if (contentElement) {
      // contentElement.style.transform = `translateX(${this.currentPosition}px)`;
      contentElement.scrollTo({
        left: this.currentPosition,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit() {
    // Calculate maximum allowed position based on content width
    const contentWidth = document.querySelector('.card')?.clientWidth || 0;
    const containerWidth =
      document.querySelector('.product-container')?.clientWidth || 0;
    this.maxPosition = Math.max(0, contentWidth - containerWidth); // Prevent exceeding container width
  }
}
