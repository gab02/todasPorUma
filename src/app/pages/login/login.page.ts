import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 500
      
    });
    await loading.present();

  }

}
