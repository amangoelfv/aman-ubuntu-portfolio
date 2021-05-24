import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const defaultWallpaper = '/assets/images/wallpaper1.png'
@Injectable({
  providedIn: 'root'
})

export class WallpaperService {

  constructor() { }
  wallpaperChanged = new BehaviorSubject<string>(defaultWallpaper);
  setWallpaper(image: string) {
    this.wallpaperChanged.next(image)
  }
}
