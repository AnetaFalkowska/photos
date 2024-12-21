import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-photo-show',
  imports: [NgIf],
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.scss',
})
export class PhotoShowComponent {
  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  url: string = '';

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getRandomPhoto().subscribe((photo) => (this.url = photo));
  }
}
