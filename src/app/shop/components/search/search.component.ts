import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';
import { CategoryDataService } from '../../services/category-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private searchItemResults$$!: Subscription;

  searchResults: CollectionItem[] | undefined | null;

  constructor(
    private backgroundImageService: BackgroundImageService,
    private route: ActivatedRoute,
    private categoryService: CategoryDataService
  ) {}

  ngOnInit(): void {
    this.backgroundImageService.changeBackgroundImage('beds');

    this.searchItemResults$$ = this.route.params.subscribe(
      (response: Params) => {
        this.searchResults = this.categoryService.getSearchResults(
          response['query']
        );
        console.log(this.searchResults);
      }
    );
  }

  ngOnDestroy(): void {
    this.searchItemResults$$.unsubscribe();
  }
}
