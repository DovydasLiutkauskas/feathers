import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackgroundImageService } from '../../services/background-image.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  currentPathBackground$$: Subscription | undefined;

  currentPathBackground: string = '/assets/images/palm-tree.jpg';
  currentUrlPath: string = '';

  constructor(
    public router: Router,
    private backgroundService: BackgroundImageService
  ) {}

  ngOnInit(): void {
    this.currentPathBackground$$ =
      this.backgroundService.backgroundImage$.subscribe((imgUrl: string) => {
        this.currentPathBackground = imgUrl;
        console.log(imgUrl);
      });
  }

  ngOnDestroy() {
    this.currentPathBackground$$?.unsubscribe();
  }
}
