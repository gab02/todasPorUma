
declare var google;

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit  {
    @ViewChild('mapElement') mapNativeElement: ElementRef;
    constructor() { }
  
    ngOnInit() {
    }
  
    ngAfterViewInit(): void {
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
  
  }
  
  