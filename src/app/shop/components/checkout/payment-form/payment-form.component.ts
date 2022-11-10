import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent {
  paymentInformationForm!: FormGroup;

  constructor(public checkoutService: CheckoutService) {
    this.paymentInformationForm = new FormGroup({
      cardType: new FormControl('credit', Validators.required),
      name: new FormControl(null, Validators.required),
      cardNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{15,16}$'),
      ]),
      expirationYear: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{2}$'),
      ]),
      expirationMonth: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{2}$'),
      ]),
      cvv: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{3}$'),
      ]),
    });
  }
}
