import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('rightMenu') rightMenu!: ElementRef;
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
  chromeWebviewConfig: IWebviewConfig = {
    slug: Apps.CHROME,
    title: "Google Chrome",
    url: "https://www.google.com/webhp?igu=1"
  }
  vsCodeWebviewConfig: IWebviewConfig = {
    slug: Apps.VSCODE,
    title: "Visual Studio Code",
    url: "https://github1s.com/amangoelfv/aman-ubuntu-portfolio"
  }
  rightMenuConfig = [
    [
      {
        name: 'New Folder',
        disabled: false,
        action: () => undefined
      }
    ],
    [
      {
        name: 'Paste',
        disabled: true,
        action: () => undefined
      }
    ],
    [
      {
        name: 'Show Desktop in Files',
        disabled: true,
        action: () => undefined
      },
      {
        name: 'Open in Terminal',
        disabled: false,
        action: () => this.openApp(Apps.TERMINAL)
      },
    ],
    [
      {
        name: 'Change Background...',
        disabled: false,
        action: () => this.openApp(Apps.SETTINGS)
      }
    ],
    [
      {
        name: 'Display Settings',
        disabled: true,
        action: () => undefined
      },
      {
        name: 'Settings',
        disabled: false,
        action: () => this.openApp(Apps.SETTINGS)
      },
    ],
  ]
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
    event.preventDefault()
    this.rightMenu.nativeElement.classList.add('show');
    if (window.innerHeight - event.y - this.rightMenu.nativeElement.offsetHeight > 0) {
      console.log("in height")
      this.rightMenu.nativeElement.style.top = event.y + 'px';
    }
    else {
      console.log("out height")
      this.rightMenu.nativeElement.style.top = window.innerHeight - this.rightMenu.nativeElement.offsetHeight;
    }


    if (window.innerWidth - event.x - this.rightMenu.nativeElement.offsetWidth > 0) {
      console.log("in width")
      this.rightMenu.nativeElement.style.left = event.x + 'px';
    }
    else {
      console.log("out width")
      this.rightMenu.nativeElement.style.left = window.innerWidth - this.rightMenu.nativeElement.offsetWidth;
    }
  }
  onLeftClick(event: MouseEvent) {
    this.rightMenu.nativeElement.classList.remove('show')
  }
}
