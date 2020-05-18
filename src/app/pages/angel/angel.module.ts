import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngelPageRoutingModule } from './angel-routing.module';

import { AngelPage } from './angel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngelPageRoutingModule
  ],
  declarations: [AngelPage]
})
export class AngelPageModule {}
