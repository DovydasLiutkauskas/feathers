import { Component, Input, OnInit } from '@angular/core';
import { CollectionItem } from '../../data/data.model';

@Component({
  selector: 'app-sales-percentage',
  templateUrl: './sales-percentage.component.html',
  styleUrls: ['./sales-percentage.component.css'],
})
export class SalesPercentageComponent implements OnInit {
  @Input() saleItem!: CollectionItem;

  constructor() {}

  ngOnInit(): void {
    console.log('wtf');
  }
}
