import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  selectedCategoryData = new Subject<CollectionItem[]>();

  constructor() {}

  getCategoryData(category: string) {
    this.selectedCategoryData.next(collections[category].items);
  }
}
