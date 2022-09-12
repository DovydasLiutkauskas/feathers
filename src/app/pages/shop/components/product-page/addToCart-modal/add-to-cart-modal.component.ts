import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { ProductPageService } from '../../../services/product-page.service';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css'],
})
export class AddToCartModalComponent implements OnInit, OnDestroy {
  @Input() currentItem!: CollectionItem;

  constructor(private productService: ProductPageService) {}

  ngOnInit(): void {
    this.checkPressedKey = this.checkPressedKey.bind(this);
    window.addEventListener('keydown', this.checkPressedKey);

    this.checkClickedElement = this.checkClickedElement.bind(this);
    window.addEventListener('click', this.checkClickedElement);
  }

  checkPressedKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.closeModal();
  }

  checkClickedElement(e: any) {
    console.log(e);
    if (e.target.classList.value === 'addToCart-modal') this.closeModal();
  }

  closeModal() {
    this.productService.closeModal();
  }

  ngOnDestroy() {
    window.removeAllListeners;
    window.removeEventListener('keydown', this.checkPressedKey);
    window.removeEventListener('click', this.checkClickedElement);
  }
}
