import { Component, Input, OnInit } from '@angular/core';
import { CollectionItem } from '../../data/data.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  @Input() currentItem!: CollectionItem;
  @Input() routLink!: string[] | string;

  constructor() {}

  ngOnInit(): void {}
}
