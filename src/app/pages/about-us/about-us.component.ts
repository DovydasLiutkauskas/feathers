import { Component, OnInit } from '@angular/core';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor(private backgroundService: BackgroundImageService) {}

  ngOnInit(): void {
    this.backgroundService.changeBackgroundImage('about-us');
  }
}
