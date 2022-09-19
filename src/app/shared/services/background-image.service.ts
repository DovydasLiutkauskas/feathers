import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundImageService {
  backgroundImgPaths: { [key: string]: string } = {
    'about-us': '/assets/images/backgrounds/autumn-background.jpg',
    'summer-sale': '/assets/images/backgrounds/palm-tree.jpg',
    contact: '/assets/images/backgrounds/contact-background.jpg',
    collections: '/assets/images/backgrounds/collections-header.png',
    kids: '/assets/images/backgrounds/kids-background.jpg',
    sheets: '/assets/images/backgrounds/collections-header.png',
    pillows: '/assets/images/backgrounds/pillow-background.jpg',
    beds: '/assets/images/backgrounds/beds-background.jpg',
    rugs: '/assets/images/backgrounds/rugs-background.jpg',
    'product-page': '/assets/images/backgrounds/product-detail-background.png',
    cart: '/assets/images/backgrounds/cart-background.png',
    default: '/assets/images/backgrounds/collections-header.png',
  };

  backgroundImage$ = new BehaviorSubject('');

  constructor() {}

  changeBackgroundImage(name: string) {
    const getBackground = this.backgroundImgPaths[name];
    this.backgroundImage$.next(
      getBackground || this.backgroundImgPaths['default']
    );
  }
}
