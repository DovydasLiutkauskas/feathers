import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/services/user-cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  private totalCartPrice$$: Subscription | undefined;
  public totalCartPrice: number | undefined;

  constructor(
    public checkoutService: CheckoutService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.totalCartPrice$$ = this.cartService.totalCartSum$.subscribe(
      (totalPrice: number) => (this.totalCartPrice = totalPrice)
    );
  }

  ngOnDestroy(): void {
    this.totalCartPrice$$?.unsubscribe();
  }
}
