import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  currentCategory!: string;

  currentProductName!: string;

  showModal$ = new BehaviorSubject(false);

  backgroundImage$ = new BehaviorSubject('main');

  relatedItems$ = new Subject<CollectionItem[]>();

  constructor() {}

  getItem(category: string, name: string) {
    this.currentCategory = category;
    this.currentProductName = name;
    this.updateRelatedItems();
    return collections[category].items.find(
      (item: CollectionItem) => item.name === name
    );
  }

  getRelatedItems() {
    return collections[this.currentCategory].items.filter(
      (item: CollectionItem) => item.name !== this.currentProductName
    );
  }

  updateRelatedItems() {
    this.relatedItems$.next(this.getRelatedItems());
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
