import { Injectable } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  constructor() {}

  getItem(category: string, name: string) {
    return collections[category].items.find(
      (item: CollectionItem) => item.name === name
    );
  }
}
