import { Injectable } from '@angular/core';
import { min } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from '../../../shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class RandomProductsService {
  productPerPage = 3;
  randomProducts: CollectionItem[] = [];
  collectionNames: string[];

  constructor() {
    this.collectionNames = Object.keys(collections);
  }

  getRandomItems() {
    this.randomProducts = [];
    for (let i = 0; i < this.productPerPage; i++) {
      const randomCategoryNum = this.randomNumberGenerator(
        this.collectionNames.length,
        1
      );
      const randomCategory = this.collectionNames[randomCategoryNum];
      const randomProductNum = this.randomNumberGenerator(
        collections[randomCategory].items.length,
        1
      );
      const randomProduct = collections[randomCategory].items[randomProductNum];
      if (this.randomProducts.find((item) => item.id === randomProduct.id)) {
        i--;
      } else {
        this.randomProducts.push(randomProduct);
      }
    }
    return this.randomProducts;
  }

  randomNumberGenerator(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1));
  }
}
