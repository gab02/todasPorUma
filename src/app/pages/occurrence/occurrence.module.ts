import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccurrencePageRoutingModule } from './occurrence-routing.module';

import { OccurrencePage } from './occurrence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccurrencePageRoutingModule
  ],
  declarations: [OccurrencePage]
})
export class OccurrencePageModule {}
