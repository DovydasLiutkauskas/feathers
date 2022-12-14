import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { ProductPageService } from '../../../services/product-page.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent implements OnInit {
  public relatedProducts$!: Observable<CollectionItem[]>;

  constructor(private productService: ProductPageService) {}

  ngOnInit(): void {
    this.relatedProducts$ = this.productService.relatedItems$;
  }
}
