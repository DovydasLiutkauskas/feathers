import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info-section',
  templateUrl: './product-info-section.component.html',
  styleUrls: ['./product-info-section.component.css'],
})
export class ProductInfoSectionComponent implements OnInit {
  currentSection = 'DESCRIPTION';

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.currentSection = event.currentTarget.textContent.trim();
  }
}
