import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent  {
  shippingInfomationForm!: FormGroup;

  constructor(public checkoutService: CheckoutService) { 
    this.shippingInfomationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      address2: new FormControl(null),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state_province: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    });
  }

}
