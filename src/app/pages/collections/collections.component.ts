import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDataService } from './components/categories/category-data.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  currentCollection$!: Observable<string>;

  constructor(private categoryService: CategoryDataService) {}

  ngOnInit(): void {}
}
