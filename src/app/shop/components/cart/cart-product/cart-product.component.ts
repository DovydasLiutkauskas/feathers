import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/data/data.model';
import { CartService } from 'src/app/shared/services/user-cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartItem!: CartItem;
  public numbers: number[];

  constructor(private cartService: CartService) {
    this.numbers = new Array(20).fill(0).map((_, i) => i + 1);
  }

  deleteItem(id: number): void {
    this.cartService.deleteItemInCart(id);
  }

  onQuantityChange(event: any): void {
    const itemId = +event.id;
    const newQty = +event.value;
    this.cartService.updateItemQuantity(itemId, newQty);
  }
}
