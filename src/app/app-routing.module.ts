import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbuntuComponent } from './modules/ubuntu/ubuntu.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/ubuntu/ubuntu.module').then(m => m.UbuntuModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
