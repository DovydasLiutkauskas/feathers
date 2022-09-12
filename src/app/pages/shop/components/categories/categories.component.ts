import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { CategoryDataService } from '../../services/category-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CollectionsCategoriesComponent implements OnInit, OnDestroy {
  currentCategoryItems!: CollectionItem[];

  currentCategoryPath$$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryDataService
  ) {}

  ngOnInit(): void {
    this.currentCategoryPath$$ = this.route.params.subscribe((url: Params) => {
      this.currentCategoryItems = this.categoryService.getCategoryData(
        url['category']
      );
    });
  }

  ngOnDestroy(): void {
    this.currentCategoryPath$$.unsubscribe();
  }
}
