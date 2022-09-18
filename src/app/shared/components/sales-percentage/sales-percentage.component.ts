import { Component, Input } from '@angular/core';
import { CollectionItem } from '../../data/data.model';

@Component({
  selector: 'app-sales-percentage',
  templateUrl: './sales-percentage.component.html',
  styleUrls: ['./sales-percentage.component.css'],
})
export class SalesPercentageComponent {
  @Input() saleItem!: CollectionItem;
}
