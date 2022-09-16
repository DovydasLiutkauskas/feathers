import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { CategoryDataService } from 'src/app/shop/services/category-data.service';

@Component({
  selector: 'app-homepage-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class HomepageSaleComponent implements OnInit {
  promoItemList: CollectionItem[] = [];

  constructor(private categoryService: CategoryDataService) {}

  ngOnInit(): void {
    this.promoItemList = this.categoryService.getPromoProducts();
  }
}
