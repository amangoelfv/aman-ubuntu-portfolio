import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WindowComponent } from './window/window.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatIconModule } from '@angular/material/icon';
import { WebviewComponent } from './webview/webview.component';
import { ChangeBackgroundComponent } from './change-background/change-background.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    WindowComponent,
    WebviewComponent,
    ChangeBackgroundComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    WebviewComponent,
    ChangeBackgroundComponent,
    TerminalComponent
  ]
})
export class ComponentsModule { }
