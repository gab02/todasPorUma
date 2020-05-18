import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngelPage } from './angel.page';

const routes: Routes = [
  {
    path: '',
    component: AngelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngelPageRoutingModule {}
