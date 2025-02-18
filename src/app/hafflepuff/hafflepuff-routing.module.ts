import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HafflepuffPage } from './hafflepuff.page';

const routes: Routes = [
  {
    path: '',
    component: HafflepuffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HafflepuffPageRoutingModule {}
