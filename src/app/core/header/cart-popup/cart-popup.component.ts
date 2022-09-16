import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css'],
  animations: [
    trigger('cartPopup', [
      state(
        'hidden',
        style({
          visibility: 'hidden',
          opacity: '0',
          transform: 'translateY(0)',
        })
      ),
      state(
        'shown',
        style({
          visibility: 'visible',
          opacity: '1',
          transform: 'translateY(140px)',
        })
      ),
      transition('hidden <=> shown', animate(300)),
    ]),
  ],
})
export class CartPopupComponent implements OnInit {
  @Input() state!: string;

  constructor() {}

  ngOnInit(): void {}
}
