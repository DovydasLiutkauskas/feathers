import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  public showModal$ = new BehaviorSubject(false);

  public relatedItems$ = new BehaviorSubject<CollectionItem[]>([]);

  getItem(category: string, name: string): CollectionItem {
    this.updateRelatedItems(category, name);
    return collections[category].items.find(
      (item: CollectionItem) => item.name === name
    )!;
  }

  updateRelatedItems(categoryName: string, itemName: string): void {
    const relatedItems = collections[categoryName].items.filter(
      (item: CollectionItem) => item.name !== itemName
    );
    this.relatedItems$.next(relatedItems);
  }

  openModal(): void {
    this.showModal$.next(true);
  }

  closeModal(): void {
    this.showModal$.next(false);
  }
}
