import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartState = 'hidden';

  @ViewChild('dropdown') dropdownEl!: ElementRef;

  cartQuantity$!: Observable<number | null>;

  constructor(private router: Router, private userSerivce: UserService) {}

  ngOnInit(): void {
    this.cartQuantity$ = this.userSerivce.updatedQuantity$;
  }

  shopDropdown(element: HTMLAnchorElement) {
    if (element.nextElementSibling?.classList.contains('show')) {
      this.router.navigate(['collections']);
      element.nextElementSibling?.classList.remove('show');
    } else {
      element.nextElementSibling?.classList.add('show');
    }
  }

  onAnimate(): void {
    if (this.cartState === 'shown') {
      this.cartState = 'hidden';
      this.router.navigate(['collections/cart']);
    } else {
      this.cartState = 'shown';
    }
  }

  clickedOutsideCart(): void {
    this.cartState = 'hidden';
  }

  clickOutsideShop(): void {
    this.dropdownEl.nativeElement.nextElementSibling.classList.remove('show');
  }
}
