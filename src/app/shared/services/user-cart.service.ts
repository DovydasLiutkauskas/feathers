import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem, CollectionItem } from '../data/data.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  quantityInCart!: number;

  itemsInCart: CartItem[] = [];

  updatedQuantity$ = new BehaviorSubject(this.getTotalQuantity());

  updatedItemsInCart$ = new Subject<CartItem[]>();

  constructor() {
    if (localStorage.getItem('cart')) {
      this.itemsInCart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  addItemToCart(item: CollectionItem, qty: number) {
    const itemExist = this.itemsInCart.findIndex(
      (cartItem: CartItem) => cartItem.item.name === item.name
    );
    if (itemExist !== -1) {
      this.itemsInCart[itemExist].quantity += qty;
    } else {
      this.itemsInCart.push({ item, quantity: qty });
      localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    }

    this.updateQuantityInCart();
  }

  getTotalQuantity(): number | null {
    if (!localStorage.getItem('cart')) return null;
    const addedItems = JSON.parse(localStorage.getItem('cart')!);
    const totalQty = addedItems.reduce((prevVal: number, currVal: CartItem) => {
      return prevVal + currVal.quantity;
    }, 0);
    return totalQty;
  }

  getItemsInCart() {
    return this.itemsInCart.slice();
  }

  updateQuantityInCart() {
    this.updatedQuantity$.next(this.getTotalQuantity());
  }

  deleteItemInCart(id: number) {
    this.itemsInCart = this.itemsInCart.filter(
      (cartItem: CartItem) => cartItem.item.id !== id
    );

    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));

    this.updatedItemsInCart$.next(this.itemsInCart);
    this.updateQuantityInCart();
  }
}
