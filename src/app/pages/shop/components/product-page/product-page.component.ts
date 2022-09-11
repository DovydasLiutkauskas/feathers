import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductPageService
  ) {}

  ngOnInit(): void {
    this.currentItem$$ = this.route.params.subscribe((params: Params) => {
      this.currentItem = this.productService.getItem(
        params['category'],
        params['id']
      );
    });
  }

  ngOnDestroy() {
    this.currentItem$$.unsubscribe();
  }
}
