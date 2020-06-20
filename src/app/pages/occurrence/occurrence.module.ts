import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LongPressModule } from 'ionic-long-press';

import { IonicModule } from '@ionic/angular';

import { OccurrencePageRoutingModule } from './occurrence-routing.module';

import { OccurrencePage } from './occurrence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccurrencePageRoutingModule,
    ReactiveFormsModule,
    LongPressModule

  ],
  declarations: [OccurrencePage]
})
export class OccurrencePageModule {}
