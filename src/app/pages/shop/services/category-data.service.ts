import { Injectable } from '@angular/core';
import { collections } from 'src/app/shared/data/data.storage';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  constructor() {}

  getCategoryData(category: string) {
    return collections[category].items.slice();
  }
}
