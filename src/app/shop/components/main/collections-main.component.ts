import { Component, OnInit } from '@angular/core';
import { BackgroundImageService } from 'src/app/shared/services/background-image.service';
import { collections } from '../../../shared/data/data.storage';

@Component({
  selector: 'app-collections-main',
  templateUrl: './collections-main.component.html',
  styleUrls: ['./collections-main.component.css'],
})
export class CollectionsMainComponent implements OnInit {
  colletionList = collections;

  constructor(private backgroundService: BackgroundImageService) {}

  ngOnInit(): void {
    this.backgroundService.changeBackgroundImage('collections');
  }
}
