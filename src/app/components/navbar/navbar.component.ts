import { Component, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
    console.log(this.appsOpen, "subscription")
  }
  appsOpen : string[]= [];

  checkIfOpen(appName: string) {
    console.log(this.appsOpen, "check")
    return this.appsOpen.includes(appName);
  }
  openApp(appName: string) {
    this.appAct.openApp(appName)
  }

  apps = [{
    icon: 'https://vivek9patel.github.io/themes/Yaru/apps/chrome.png',
    name: 'Google Chrome',
    slug: Apps.CHROME
  }]
}
