import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HafflepuffPageRoutingModule } from './hafflepuff-routing.module';

import { HafflepuffPage } from './hafflepuff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HafflepuffPageRoutingModule
  ],
  declarations: [HafflepuffPage]
})
export class HafflepuffPageModule {}
