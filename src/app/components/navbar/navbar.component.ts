import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('appIcon') appIcon!: ElementRef;
  constructor(
    private appAct: AppActivityService
  ) { }

  ngOnInit(): void {
    this.subscribeToAppOpen();
    this.subscribeToAppClosure();
  }

  subscribeToAppOpen() {
    this.appAct.appOpened.subscribe(app => {
      this.appsOpen.push(app)
    })
  }
  subscribeToAppClosure() {
    this.appAct.appClosed.subscribe(app => {
      var index = this.appsOpen.indexOf(app);
      if (index !== -1) {
        this.appsOpen.splice(index, 1);
      }
    })
  }
  appsOpen: string[] = [];

  checkIfOpen(appName: string) {
    return this.appsOpen.includes(appName);
  }
  openApp(appName: string) {
    this.appAct.openApp(appName)
  }

  apps = [
    {
      icon: 'https://vivek9patel.github.io/themes/Yaru/apps/chrome.png',
      name: 'Google Chrome',
      slug: Apps.CHROME
    },
    {
      icon: 'https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png',
      name: 'Visual Studio Code',
      slug: Apps.VSCODE

    },
    {
      icon: 'https://vivek9patel.github.io/themes/Yaru/apps/gnome-control-center.png',
      name: 'Settings',
      slug: Apps.SETTINGS
    },
    {
      icon: 'https://vivek9patel.github.io/themes/Yaru/apps/bash.png',
      name: 'Terminal',
      slug: Apps.TERMINAL
    }
  ]
}
