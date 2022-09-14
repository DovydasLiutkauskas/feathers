import { Component, OnInit } from '@angular/core';
import { ProductPageService } from '../../services/product-page.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductPageService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.productService.changeBackgroundImage('cart');
    }, 0);
  }
}
