import { Injectable } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  currentCategory!: string;

  currentProductName!: string;

  constructor() {}

  getItem(category: string, name: string) {
    this.currentCategory = category;
    this.currentProductName = name;
    return collections[category].items.find(
      (item: CollectionItem) => item.name === name
    );
  }

  getRelatedItems() {
    return collections[this.currentCategory].items.filter(
      (item: CollectionItem) => item.name !== this.currentProductName
    );
  }
}
