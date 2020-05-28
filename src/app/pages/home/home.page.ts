import { Platform, LoadingController, PopoverController, AlertController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';


import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMaps, GoogleMapOptions, Marker, GoogleMapsEvent, GoogleMap, Environment, MyLocation, GoogleMapsAnimation } from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
   
  @ViewChild('map', {static:true}) mapElement: any;

  map: GoogleMap;
  private loading: any;
  constructor(private plataform: Platform,
              private loadingCtrl: LoadingController,
              public popoverController: PopoverController,
              public alertController: AlertController,
              private sms: SMS    ) { }

  ngOnInit(){
    this.mapElement = this.mapElement.nativeElement;
    this.mapElement.style.widht = this.plataform.width() + 'px';
    this.mapElement.style.height = this.plataform.height() + 'px';
    this.loadMap();
    this.addOriginMarker();
  }

center(){
this.map.moveCameraZoomIn();

}

sendTxt() {
  this.sms.send(
  '+5511981464438', 
  'Hello world!'
    );
}
async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: HomePage,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  return await popover.present();
}
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'SMS' ,
    message: 'Quando clicar nesse botão nós iremos pedir ajuda para os seus anjos via SMS',
    buttons: ['OK']
  });
  this.sms.send('+55 11 96722-4507', 'fala seu puto');

  await alert.present();
}
async presentAlert1() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Whatsapp',
    message: 'Quando clicar nesse botão nós iremos pedir ajuda para os seus anjos via Whatsapp',
    buttons: ['OK']
  });

  await alert.present();
}
  async loadMap(){

    this.loading = await this.loadingCtrl.create({
      message:'please, in loading...',
      duration: 2000
    
    });
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBwUVTQjWwXRcx_sQ2e1xRIoWOr1I_FrgQ',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBwUVTQjWwXRcx_sQ2e1xRIoWOr1I_FrgQ'
    });
    const mapOption: GoogleMapOptions = {
     controls:{
zoom: false

     }
    };
    this.map = GoogleMaps.create(this.mapElement, mapOption);
    try{ 
      await this.map.one(GoogleMapsEvent.MAP_READY);
      this.addOriginMarker(); 
      

    } catch(error){
      console.error(error);
    }


     }

     async addOriginMarker(){
       try{const myLocation: MyLocation = await this.map.getMyLocation();
        await this.map.moveCamera({
          target: myLocation.latLng,
          zoom:18
            });
         await this.map.addMarkerSync({
title:'Origem',
icon: '#000',
animation: GoogleMapsAnimation.BOUNCE,
position:myLocation.latLng

         })

      }
       catch(error){
        console.error(error);
      }
    }
}

/*
  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }*/