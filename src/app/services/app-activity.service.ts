import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppActivityService {

  constructor() { }

  appOpened = new Subject<string>();
  appClosed = new Subject<string>();

  openApp(appName: string) {
    this.appOpened.next(appName);
  }

  closeApp(appName: string) {
    this.appClosed.next(appName);
  }
}
