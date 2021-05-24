import { Component, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { WallpaperService } from 'src/app/services/wallpaper.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.scss']
})
export class ChangeBackgroundComponent implements OnInit {

  constructor(
    private appsActivityService: AppActivityService,
    private wallpaperService: WallpaperService
  ) { }

  ngOnInit(): void {
    this.selectedImage = this.images[0]

  }
  closeApp() {
    this.appsActivityService.closeApp(Apps.SETTINGS);
  }

  selectedImage: string = '';
  images = [
    '/assets/images/wallpaper1.png',
    '/assets/images/wallpaper2.jpg',
    '/assets/images/wallpaper3.png',
    '/assets/images/wallpaper4.png',
    '/assets/images/wallpaper5.jpg',
    '/assets/images/wallpaper6.jpg',
    '/assets/images/wallpaper7.jpg',
  ]

  setWallpaper(image: string) {
    this.selectedImage = image;
    this.wallpaperService.setWallpaper(image)
  }
}
