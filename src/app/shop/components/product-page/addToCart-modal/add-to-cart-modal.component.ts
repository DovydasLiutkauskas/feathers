import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { CartService } from 'src/app/shared/services/user-cart.service';
import { ProductPageService } from '../../../services/product-page.service';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css'],
})
export class AddToCartModalComponent implements OnInit, OnDestroy {
  @Input() currentItem!: CollectionItem;

  cartQuantity$!: Observable<number | null>;

  constructor(
    private productService: ProductPageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartQuantity$ = this.cartService.updatedQuantity$;

    this.checkPressedKey = this.checkPressedKey.bind(this);
    window.addEventListener('keydown', this.checkPressedKey);
  }

  checkPressedKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.closeModal();
  }

  closeModal() {
    this.productService.closeModal();
  }

  ngOnDestroy() {
    window.removeAllListeners;
    window.removeEventListener('keydown', this.checkPressedKey);
  }
}
