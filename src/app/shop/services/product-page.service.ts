import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  showModal$ = new BehaviorSubject(false);

  backgroundImage$ = new BehaviorSubject('main');

  relatedItems$ = new BehaviorSubject([]);

  constructor() {}

  getItem(category: string, name: string) {
    this.updateRelatedItems(category, name);
    return collections[category].items.find(
      (item: CollectionItem) => item.name === name
    );
  }

  updateRelatedItems(categoryName: string, itemName: string) {
    const relatedItems = collections[categoryName].items.filter(
      (item: CollectionItem) => item.name !== itemName
    );
    this.relatedItems$.next(relatedItems);
  }

  openModal() {
    this.showModal$.next(true);
  }

  closeModal() {
    this.showModal$.next(false);
  }

  changeBackgroundImage(name: string) {
    this.backgroundImage$.next(name);
  }
}