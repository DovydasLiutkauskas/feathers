import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/user-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarMenu') navbarMenu: ElementRef | undefined;

  cartState = 'hidden';

  @ViewChild('dropdown') dropdownEl!: ElementRef;

  cartQuantity$!: Observable<number | null>;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartQuantity$ = this.cartService.updatedQuantity$;
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

  onNavToggleClick() {
    this.navbarMenu?.nativeElement.classList.add('show');
  }

  clickedOutsideNav(): void {
    this.navbarMenu?.nativeElement.classList.remove('show');
  }
}
