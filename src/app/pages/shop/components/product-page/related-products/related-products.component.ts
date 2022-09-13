import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { ProductPageService } from '../../../services/product-page.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent implements OnInit, OnDestroy {
  relatedProducts!: CollectionItem[];

  relatedProducts$$!: Subscription;

  constructor(private productService: ProductPageService) {}

  ngOnInit(): void {
    this.relatedProducts = this.productService.getRelatedItems();

    this.relatedProducts$$ = this.productService.relatedItems$.subscribe(
      (items: CollectionItem[]) =>
        setTimeout(() => {
          this.relatedProducts = items;
        }, 500)
    );
  }

  ngOnDestroy() {
    this.relatedProducts$$.unsubscribe();
  }
}
