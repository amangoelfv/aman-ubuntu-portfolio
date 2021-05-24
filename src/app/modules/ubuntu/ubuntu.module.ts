import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbuntuComponent } from './ubuntu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UbuntuRoutingModule } from './ubuntu-routing.module';



@NgModule({
  declarations: [
    UbuntuComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UbuntuRoutingModule
  ],
  exports: [
    UbuntuComponent
  ]
})
export class UbuntuModule { }
