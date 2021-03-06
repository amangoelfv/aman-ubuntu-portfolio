import { Component, Input, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IWindowConfig } from '../window/window.component';

export interface IWebviewConfig extends IWindowConfig {
  url: string;
  slug: string;
}
@Component({
  selector: 'app-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.scss']
})
export class WebviewComponent implements OnInit {

  @Input() config!: IWebviewConfig;

  url: SafeResourceUrl = '';
  constructor(
    private sanitizer: DomSanitizer,
    private appsActivityService: AppActivityService
  ) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
  }
  closeApp() {
    this.appsActivityService.closeApp(this.config.slug);
  }
}
