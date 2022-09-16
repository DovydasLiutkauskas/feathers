import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';
import { RandomProductsService } from '../services/random-products.service';

@Component({
  selector: 'app-homepage-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class HomepageShowcaseComponent implements OnInit {
  randomItems!: CollectionItem[];

  constructor(private randomProducts: RandomProductsService) {}

  ngOnInit(): void {
    this.randomItems = this.randomProducts.getRandomItems();
  }
}
