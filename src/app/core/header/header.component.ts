import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdown') dropdownEl!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.onclick = (e: MouseEvent) => {
      if (e.target !== this.dropdownEl.nativeElement) {
        this.dropdownEl.nativeElement.nextElementSibling.classList.remove(
          'show'
        );
      }
    };
  }

  shopDropdown(element: HTMLAnchorElement) {
    if (element.nextElementSibling?.classList.contains('show')) {
      this.router.navigate(['collections']);
      element.nextElementSibling?.classList.remove('show');
    } else {
      element.nextElementSibling?.classList.add('show');
    }
  }
}
