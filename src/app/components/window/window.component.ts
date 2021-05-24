import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() template!: any;
  @Output() closed = new EventEmitter();
  constructor(
  ) { }
  ngOnInit(): void {
  }
  dragPosition = { x: 0, y: 0 };
  width = '60%';
  height = '60%';
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
    this.width = '60%';
    this.height = '60%'
    this.maximized = false;

  }

  closeWindow() {
    this.closed.emit()
  }
}
