import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';
import { CartService } from 'src/app/shared/services/user-cart.service';
import { ProductPageService } from '../../services/product-page.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  currentItem$$!: Subscription;
  currentItem!: CollectionItem;
  showModal$!: Observable<boolean>;
  options: number[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductPageService,
    private location: Location,
    private cartService: CartService,
    private backgroundSerivce: BackgroundImageService
  ) {
    this.options = new Array(20).fill(0).map((_, i) => i + 1);
  }

  ngOnInit(): void {
    this.backgroundSerivce.changeBackgroundImage('product-page');

    this.showModal$ = this.productService.showModal$;

    this.currentItem$$ = this.route.params.subscribe((params: Params) => {
      this.currentItem = this.productService.getItem(
        params['category'],
        params['id']
      );
    });
  }

  goBack() {
    this.location.back();
  }

  onAddToCart(qty: number) {
    this.cartService.addItemToCart(this.currentItem, qty);

    this.productService.openModal();
  }

  ngOnDestroy() {
    this.currentItem$$.unsubscribe();
  }
}
