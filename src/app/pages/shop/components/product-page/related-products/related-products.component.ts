import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { ProductPageService } from '../../../services/product-page.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent implements OnInit {
  relatedProducts!: CollectionItem[];

  constructor(private productService: ProductPageService) {}

  ngOnInit(): void {
    this.relatedProducts = this.productService.getRelatedItems();
  }
}
