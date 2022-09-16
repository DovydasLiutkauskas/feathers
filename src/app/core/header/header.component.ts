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
    window.onclick = (e: MouseEvent) => {
      if (e.target !== this.dropdownEl.nativeElement) {
        this.dropdownEl.nativeElement.nextElementSibling.classList.remove(
          'show'
        );
      }
    };

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

  onAnimate() {
    this.cartState === 'hidden'
      ? (this.cartState = 'shown')
      : (this.cartState = 'hidden');
  }
}
