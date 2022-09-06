import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CategoryModel, CollectionItem } from 'src/app/shared/data/data.model';
import { CategoryDataService } from './category-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CollectionsCategoriesComponent implements OnInit, OnDestroy {
  currentCategoryItems!: Observable<CollectionItem[]>;

  currentCategoryPath$$!: Subscription;

  categoryName!: string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryDataService
  ) {}

  ngOnInit(): void {
    this.currentCategoryPath$$ = this.route.params.subscribe((url: Params) => {
      this.categoryService.getCategoryData(url['category']);
      this.categoryName = url['category'];
    });

    this.currentCategoryItems = this.categoryService.selectedCategoryData;
  }

  ngOnDestroy(): void {
    this.currentCategoryPath$$.unsubscribe();
  }
}
