import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbuntuComponent } from './ubuntu.component';

const routes: Routes = [
  {
    path: '',
    component: UbuntuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbuntuRoutingModule { }
