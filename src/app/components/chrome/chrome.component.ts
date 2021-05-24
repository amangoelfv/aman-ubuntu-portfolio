import { Component, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss']
})
export class ChromeComponent implements OnInit {

  constructor(
    private appsActivityService: AppActivityService
  ) { }

  ngOnInit(): void {
  }

  closeChrome() {
    this.appsActivityService.closeApp(Apps.CHROME);
  }
}
