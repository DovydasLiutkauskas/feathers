import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdown') dropdownEl!: ElementRef;

  constructor() {}

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
      console.log('stop it');
    } else {
      element.nextElementSibling?.classList.add('show');
    }
  }
}
