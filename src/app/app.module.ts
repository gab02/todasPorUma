
import { SMS } from '@ionic-native/sms/ngx';
import {  Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicGestureConfig } from '../app/pages/occurrence/IonicGestureConfig'


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Contacts } from '@ionic-native/contacts';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    IonicGestureConfig,
    { provide: HAMMER_GESTURE_CONFIG , useClass: IonicGestureConfig },
    Geolocation, 
    GoogleMaps, 
    Contacts, 
    SMS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
