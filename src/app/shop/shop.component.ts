import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductPageService } from './services/product-page.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
  pageBackground!: string;

  pageBackground$$!: Subscription;

  constructor(
    public router: Router,
    private productServce: ProductPageService
  ) {}

  ngOnInit(): void {
    this.pageBackground$$ = this.productServce.backgroundImage$.subscribe(
      (pageName: string) => (this.pageBackground = pageName)
    );
  }

  ngOnDestroy() {
    this.pageBackground$$.unsubscribe();
  }
}
