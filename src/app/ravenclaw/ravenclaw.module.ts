import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RavenclawPageRoutingModule } from './ravenclaw-routing.module';

import { RavenclawPage } from './ravenclaw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RavenclawPageRoutingModule
  ],
  declarations: [RavenclawPage]
})
export class RavenclawPageModule {}
