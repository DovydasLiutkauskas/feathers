import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductPageService,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.showModal$ = this.productService.showModal$;

    this.currentItem$$ = this.route.params.subscribe((params: Params) => {
      this.currentItem = this.productService.getItem(
        params['category'],
        params['id']
      );
    });

    setTimeout(() => {
      this.productService.changeBackgroundImage('product-page');
    }, 0);
  }

  goBack() {
    this.location.back();
  }

  onAddToCart() {
    this.cartService.addItemToCart(this.currentItem, 1);

    this.productService.openModal();
  }

  ngOnDestroy() {
    this.currentItem$$.unsubscribe();
    this.productService.changeBackgroundImage('main');
  }
}
