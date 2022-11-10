import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private deliveryInfoSubmitted = false;

  private paymentInfoSubmitted = false;

  constructor() {}

  getDeliveryInfoSubmitted(): boolean {
    return this.deliveryInfoSubmitted;
  }

  getPaymentInfoSubmitted(): boolean {
    return this.paymentInfoSubmitted;
  }

  changeInfoState(type: string): void {
    type === 'delivery'
      ? (this.deliveryInfoSubmitted = false)
      : (this.paymentInfoSubmitted = false);
  }

  submitSectionInfo(type: string): void {
    type === 'delivery'
      ? (this.deliveryInfoSubmitted = true)
      : (this.paymentInfoSubmitted = true);
  }
}
