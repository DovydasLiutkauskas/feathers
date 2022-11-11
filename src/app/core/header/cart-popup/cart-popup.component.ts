import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/data/data.model';
import { CartService } from 'src/app/shared/services/user-cart.service';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css'],
  animations: [
    trigger('cartPopup', [
      state(
        'hidden',
        style({
          visibility: 'hidden',
          opacity: '0',
          transform: 'translateY(0)',
        })
      ),
      state(
        'shown',
        style({
          visibility: 'visible',
          opacity: '1',
          transform: 'translateY(140px)',
        })
      ),
      transition('hidden <=> shown', animate(300)),
    ]),
  ],
})
export class CartPopupComponent implements OnInit, OnDestroy {
  @Input() state!: string;

  itemsInCart: CartItem[] = [];
  itemsInCart$$: Subscription | undefined;

  totalItemsPrice$!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsInCart();

    this.itemsInCart$$ = this.cartService.updatedItemsInCart$.subscribe(
      (updatedItems: CartItem[]) => (this.itemsInCart = updatedItems)
    );

    this.totalItemsPrice$ = this.cartService.totalCartSum$;
  }

  onItemDelete(id: number): void {
    this.cartService.deleteItemInCart(id);
  }

  ngOnDestroy(): void {
    this.itemsInCart$$?.unsubscribe();
  }
}
