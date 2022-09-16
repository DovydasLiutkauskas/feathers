import { Injectable } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  constructor() {}

  getCategoryData(category: string) {
    return collections[category].items.slice();
  }

  getPromoProducts() {
    const promoProducts = [];
    for (const key in collections) {
      const currentPromoProducts = collections[key].items.filter(
        (product: CollectionItem) => product.salePrice
      );
      promoProducts.push(...currentPromoProducts);
    }
    return promoProducts;
  }
}
