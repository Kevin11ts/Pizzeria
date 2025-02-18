import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GryffinderPage } from './gryffinder.page';

const routes: Routes = [
  {
    path: '',
    component: GryffinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GryffinderPageRoutingModule {}
