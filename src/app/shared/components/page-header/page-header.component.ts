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
  private currentPathBackground$$: Subscription | undefined;

  public currentPathBackground: string = '/assets/images/palm-tree.jpg';

  constructor(
    public router: Router,
    private backgroundService: BackgroundImageService
  ) {}

  ngOnInit(): void {
    this.currentPathBackground$$ =
      this.backgroundService.backgroundImage$.subscribe((imgUrl: string) => {
        this.currentPathBackground = imgUrl;
      });
  }

  ngOnDestroy(): void {
    this.currentPathBackground$$?.unsubscribe();
  }
}
