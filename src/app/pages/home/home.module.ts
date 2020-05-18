import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from "./home.page";
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HomePageRoutingModule } from './home-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [HomePage],
  providers: [Geolocation]
  

})
export class HomePageModule {}
