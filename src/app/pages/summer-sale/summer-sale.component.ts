import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { CategoryDataService } from 'src/app/shop/services/category-data.service';

@Component({
  selector: 'app-summer-sale',
  templateUrl: './summer-sale.component.html',
  styleUrls: ['./summer-sale.component.css'],
})
export class SummerSaleComponent implements OnInit {
  saleProducts: CollectionItem[] = [];

  constructor(private categoryService: CategoryDataService) {}

  ngOnInit(): void {
    this.saleProducts = this.categoryService.getPromoProducts();
  }
}
