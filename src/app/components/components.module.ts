import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WindowComponent } from './window/window.component';
import { ChromeComponent } from './chrome/chrome.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    NavbarComponent,
    WindowComponent,
    ChromeComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    ChromeComponent
  ]
})
export class ComponentsModule { }
