import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  currentRoute$$!: Subscription;

  currentRoute!: string[];

  constructor(private router: Router) {
    this.currentRoute$$ = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const pathArr = event.url.split('/');
        pathArr.shift();
        if (pathArr.length === 3) {
          pathArr[2] = pathArr[2].replace('%20', ' ');
        }
        this.currentRoute = pathArr;
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.currentRoute$$.unsubscribe();
  }
}
