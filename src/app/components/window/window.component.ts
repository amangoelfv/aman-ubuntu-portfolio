import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() template!: any;
  @Input() title!: string;
  @Output() closed = new EventEmitter();
  constructor(
    private appActService: AppActivityService
  ) { }
  ngOnInit(): void {
  }
  dragPosition = { x: 0, y: 0 };
  width = '70%';
  height = '90%';
  maximized = false;
  changeWindowSize() {
    if (this.maximized) {
      this.restoreWindow();
    } else {
      this.maximizeWindow();
    }
  }
  maximizeWindow() {
    this.dragPosition = { x: 0, y: 0 };
    this.width = '100%';
    this.height = '100%';
    this.maximized = true;
  }
  restoreWindow() {
    this.width = '70%';
    this.height = '80%'
    this.maximized = false;

  }

  closeWindow() {
    this.closed.emit()
  }
}
