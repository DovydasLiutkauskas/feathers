import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/data/data.model';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';
import { CartService } from 'src/app/shared/services/user-cart.service';
import { ProductPageService } from '../../services/product-page.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  currentCartItems!: CartItem[];
  updateItemsInCart$$!: Subscription;
  productPriceTotal$!: Observable<number>;
  deliveryPrice = 30;

  constructor(
    private productService: ProductPageService,
    private cartService: CartService,
    private location: Location,
    private backgroundService: BackgroundImageService
  ) {}

  ngOnInit(): void {
    this.backgroundService.changeBackgroundImage('cart');

    this.currentCartItems = this.cartService.getItemsInCart();

    this.productPriceTotal$ = this.cartService.totalCartSum$;

    this.updateItemsInCart$$ = this.cartService.updatedItemsInCart$.subscribe(
      (updatedItem: CartItem[]) => {
        this.currentCartItems = updatedItem;
      }
    );

    if (this.currentCartItems.length) {
      this.productService.updateRelatedItems(
        this.currentCartItems[0].item.category,
        this.currentCartItems[0].item.name
      );
    }
  }

  onInputFocus(button: HTMLButtonElement) {
    button.classList.remove('hide-search-button');
  }

  onInputBlur(button: HTMLButtonElement) {
    button.classList.add('hide-search-button');
  }

  ngOnDestroy() {
    this.updateItemsInCart$$.unsubscribe();
  }
}
