import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit, OnDestroy {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
