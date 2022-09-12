import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
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
    private location: Location
  ) {}

  ngOnInit(): void {
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

  onAddToCart() {
    this.productService.openModal();
  }

  ngOnDestroy() {
    this.currentItem$$.unsubscribe();
  }
}
