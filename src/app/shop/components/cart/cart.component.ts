import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/data/data.model';
import { UserService } from 'src/app/shared/services/user-cart.service';
import { ProductPageService } from '../../services/product-page.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  currentCartItems!: CartItem[];
  updateItemsInCart$$!: Subscription;
  deliveryPrice = 30;
  productPriceTotal!: number;

  constructor(
    private productService: ProductPageService,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.productService.changeBackgroundImage('cart');
    }, 0);

    this.currentCartItems = this.userService.getItemsInCart();

    this.totalProductPrice();

    this.updateItemsInCart$$ = this.userService.updatedItemsInCart$.subscribe(
      (updatedItem: CartItem[]) => {
        this.currentCartItems = updatedItem;
        this.totalProductPrice();
      }
    );

    if (this.currentCartItems.length) {
      this.productService.updateRelatedItems(
        this.currentCartItems[0].item.category,
        this.currentCartItems[0].item.name
      );
    }
  }

  totalProductPrice() {
    const totalPrice = this.currentCartItems.reduce(
      (prevValue: number, currValue: CartItem) => {
        return prevValue + currValue.item.price * currValue.quantity;
      },
      0
    );

    this.productPriceTotal = totalPrice;
  }

  deleteItem(id: number) {
    this.userService.deleteItemInCart(id);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.updateItemsInCart$$.unsubscribe();
  }
}
