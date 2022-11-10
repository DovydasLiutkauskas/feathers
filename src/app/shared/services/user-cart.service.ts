import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem, CollectionItem } from '../data/data.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCart: CartItem[] = [];

  updatedQuantity$ = new BehaviorSubject(this.getTotalQuantity());

  updatedItemsInCart$ = new Subject<CartItem[]>();

  public totalCartSum$ = new BehaviorSubject<number>(0);

  constructor() {
    if (localStorage.getItem('cart')) {
      this.itemsInCart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  addItemToCart(item: CollectionItem, qty: number) {
    const itemExist = this.itemsInCart.findIndex(
      (cartItem: CartItem) => cartItem.item.id === item.id
    );
    if (itemExist !== -1) {
      this.itemsInCart[itemExist].quantity += qty;
    } else {
      this.itemsInCart.push({ item, quantity: qty });
    }

    this.updateCartData();
  }

  deleteItemInCart(id: number) {
    this.itemsInCart = this.itemsInCart.filter(
      (cartItem: CartItem) => cartItem.item.id !== id
    );

    this.updateCartData();
  }

  deleteAllItemsInCart() {
    localStorage.removeItem('cart');
  }

  getItemsInCart(): CartItem[] {
    this.getTotalCartPrice();
    return this.itemsInCart.slice();
  }

  private getTotalQuantity(): number | null {
    if (!localStorage.getItem('cart')) return null;
    const addedItems = JSON.parse(localStorage.getItem('cart')!);
    const totalQty = addedItems.reduce((prevVal: number, currVal: CartItem) => {
      return prevVal + currVal.quantity;
    }, 0);
    return totalQty;
  }

  private updateQuantityInCart(): void {
    this.updatedQuantity$.next(this.getTotalQuantity());
  }

  private getTotalCartPrice(): void {
    const totalPrice = this.itemsInCart.reduce(
      (prevValue: number, currValue: CartItem) => {
        const price = currValue.item.salePrice || currValue.item.price;
        return prevValue + price * currValue.quantity;
      },
      0
    );
    this.totalCartSum$.next(totalPrice);
  }

  updateItemQuantity(id: number, qty: number): void {
    const itemToChange = this.itemsInCart.findIndex(
      (cartItem) => cartItem.item.id === id
    );

    if (itemToChange !== -1) {
      this.itemsInCart[itemToChange].quantity = qty;
      this.updateCartData();
    }
  }

  private updateCartData(): void {
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    this.updatedItemsInCart$.next(this.itemsInCart);
    this.updateQuantityInCart();
    this.getTotalCartPrice();
  }
}
