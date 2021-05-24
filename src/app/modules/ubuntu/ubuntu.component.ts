import { Component, OnInit } from '@angular/core';
import { IWebviewConfig } from 'src/app/components/webview/webview.component';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { WallpaperService } from 'src/app/services/wallpaper.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-ubuntu',
  templateUrl: './ubuntu.component.html',
  styleUrls: ['./ubuntu.component.scss']
})
export class UbuntuComponent implements OnInit {

  constructor(
    private AppActivityService: AppActivityService,
    private wallPaperService: WallpaperService
  ) { }

  ngOnInit(): void {
    this.subscribeToAppClosure();
    this.subscribeToAppOpen();
    this.subscribeToWallpaperChange();
  }
  availableApps = Apps;
  background: string = ''
  appsOpen: string[] = [];
  apps = [{
    icon: 'https://vivek9patel.github.io/themes/Yaru/apps/chrome.png',
    name: 'Google Chrome',
    slug: Apps.CHROME
  }]
  chromeWebviewConfig : IWebviewConfig = {
    slug: Apps.CHROME,
    title: "Google Chrome",
    url: "https://www.google.com/webhp?igu=1"
  }
  vsCodeWebviewConfig : IWebviewConfig = {
    slug: Apps.VSCODE,
    title: "Visual Studio Code",
    url: "https://github1s.com/amangoelfv/aman-ubuntu-portfolio"
  }
  subscribeToAppClosure() {
    this.AppActivityService.appClosed.subscribe((app: any) => {
      this.closeApp(app)
    })
  }
  subscribeToAppOpen() {
    this.AppActivityService.appOpened.subscribe((app: string) => {
      this.appsOpen.push(app);
    })
  }
  subscribeToWallpaperChange() {
    this.wallPaperService.wallpaperChanged.subscribe((image: string) => {
      this.background = `url(${image})`;
    })
  }
  checkIfOpen(appName: string) {
    return this.appsOpen.includes(appName);
  }
  openApp(appName: string) {
    this.AppActivityService.openApp(appName)
  }
  closeApp(appName: string) {
    var index = this.appsOpen.indexOf(appName);
    if (index !== -1) {
      this.appsOpen.splice(index, 1);
    }
  }
  onRightClick(event: MouseEvent) {
    console.log(event)
  }
}
