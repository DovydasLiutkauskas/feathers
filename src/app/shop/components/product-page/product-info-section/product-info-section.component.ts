import { Component, Input } from '@angular/core';
import { CollectionItem } from 'src/app/shared/data/data.model';

@Component({
  selector: 'app-product-info-section',
  templateUrl: './product-info-section.component.html',
  styleUrls: ['./product-info-section.component.css'],
})
export class ProductInfoSectionComponent {
  @Input() product: CollectionItem | undefined;
  public currentSection = 'DESCRIPTION';
  public defaultText =
    'No data, please contact us for more information regards this product.';

  onClick(event: any): void {
    this.currentSection = event.currentTarget.textContent.trim();
  }
}
