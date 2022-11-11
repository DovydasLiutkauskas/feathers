import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/user-cart.service';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent {
  public orderSubmitted: boolean = false;

  public secondsLeft = 5;

  private interval: any;

  constructor(
    private location: Location,
    private checkoutService: CheckoutService,
    private router: Router,
    private cartService: CartService
  ) {}

  goBack(): void {
    this.location.back();
  }

  informationSubmitted(): boolean {
    return (
      this.checkoutService.getDeliveryInfoSubmitted() &&
      this.checkoutService.getPaymentInfoSubmitted()
    );
  }

  submitOrder(): void {
    window.scrollTo(0, 0);
    this.orderSubmitted = true;
    this.interval = setInterval(() => this.countdown(), 1000);
    this.cartService.deleteAllItemsInCart();
  }

  countdown(): void {
    this.secondsLeft--;
    if (this.secondsLeft === 0) {
      this.router.navigate(['/home']);
    }
  }
}
