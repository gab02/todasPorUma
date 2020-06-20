import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Occurrence } from './models';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.page.html',
  styleUrls: ['./occurrence.page.scss'],
})
export class OccurrencePage implements OnInit  {
  nome = "";
  bairro = "";
  descricao ="";
  itens: Array<Occurrence> = [];
  formGroup: FormGroup;
  //VARIAVEIS
  smsText: string;
  constructor(  private fb: FormBuilder, public alertController: AlertController,public loadingController: LoadingController) { }



  ngOnInit() {
  this.gerarFormItem();
}

gerarFormItem() {
    this.formGroup = this.fb.group({
       nome: ['', [Validators.required]],
       descricao: ['', [Validators.required]],
       bairro: ['', [Validators.required]]

      });
 }

  removeItem(index: number) {
    this.itens.splice(index, 1);
  }
addItem1() {
    if ((this.formGroup.get("nome").value !== "") && (this.formGroup.get("descricao").value !== "")&&(this.formGroup.get("bairro").value !== "")) {
      
      this.formGroup.reset();
        this.itens.push(this.formGroup.value);
        this.gerarFormItem();
             
  }
    else {
        return this.presentAlert1();
    }
}
async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ERROR',
      subHeader: 'Formulário',
      message: 'É necessário que todos os campos sejam preenchidos para prosseguir...',
      buttons: ['OK']
    });

    await alert.present();
  }
}