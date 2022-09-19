import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  qtyForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductPageService,
    private location: Location,
    private cartService: CartService,
    private backgroundSerivce: BackgroundImageService
  ) {}

  ngOnInit(): void {
    this.backgroundSerivce.changeBackgroundImage('product-page');

    this.showModal$ = this.productService.showModal$;

    this.currentItem$$ = this.route.params.subscribe((params: Params) => {
      this.currentItem = this.productService.getItem(
        params['category'],
        params['id']
      );
    });

    this.qtyForm = new FormGroup({
      quantity: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ]),
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
