import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GryffinderPageRoutingModule } from './gryffinder-routing.module';

import { GryffinderPage } from './gryffinder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GryffinderPageRoutingModule
  ],
  declarations: [GryffinderPage]
})
export class GryffinderPageModule {}
