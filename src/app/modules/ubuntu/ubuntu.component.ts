import { Component, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-ubuntu',
  templateUrl: './ubuntu.component.html',
  styleUrls: ['./ubuntu.component.scss']
})
export class UbuntuComponent implements OnInit {

  constructor(
    private AppActivityService: AppActivityService
  ) { }

  ngOnInit(): void {
    this.subscribeToAppClosure();
    this.subscribeToAppOpen()
  }
  availableApps = Apps;
  appsOpen: string[] = [];
  apps = [{
    icon: 'https://vivek9patel.github.io/themes/Yaru/apps/chrome.png',
    name: 'Google Chrome',
    slug: Apps.CHROME
  }]

  subscribeToAppClosure() {
    this.AppActivityService.appClosed.subscribe((app: any) => {
      this.closeApp(app)
    })
  }
  subscribeToAppOpen() {
    this.AppActivityService.appOpened.subscribe((app: string) => {
      this.appsOpen.push(app)
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
}
