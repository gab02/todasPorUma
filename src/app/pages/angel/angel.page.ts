import { DataAngel } from './models/dataAngel.module';
import { Component, OnInit } from '@angular/core';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';
import { Contacts } from '@ionic-native/contacts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-angel',
    templateUrl: './angel.page.html',
    styleUrls: ['./angel.page.scss'],
})
export class AngelPage implements OnInit {
    nome = "0";
    numero ="0";
    itens: Array<DataAngel> = [];
    formGroup: FormGroup;
    //VARIAVEIS
    smsText: string;
    // tslint:disable-next-line: deprecation
    constructor(public contacts: Contacts, public sms: SMS, private fb: FormBuilder, public alertController: AlertController,public loadingController: LoadingController) { }
    ngOnInit() {
      this.gerarFormItem();
     
    }

    gerarFormItem() {
        this.formGroup = this.fb.group({
           nome: ['', [Validators.required]],
           numero: ['', [Validators.required, Validators.min(1)]],
       });
     }
     k(){
        this.nome = "";
        this.numero = "";
        
      }
      removeItem(index: number) {
        this.itens.splice(index, 1);
      }
    addItem1() {
        if ((this.formGroup.get("nome").value !== "") && (this.formGroup.get("numero").value !== "")) {
            const variavel = new DataAngel(this.formGroup.get("nome").value, this.formGroup.get("numero").value);
            this.formGroup.reset();
           
            this.itens.push(variavel);
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
    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            subHeader: 'DEU RUIM',
            message: 'mjdgfswjgjsdfkigjl',
            buttons: ['OK']
        });
    }
    async presentLoading() {
        const loading = await this.loadingController.create({
          message: 'Carregando...',
          duration: 500
          
        });
        await loading.present();
    
      }
    SMS() {
        this.contacts.pickContact().then((contact) => {
            var contactNumber = contact.phoneNumbers[0].value;
            //now sms code will be written
            var options: SmsOptions = {
                replaceLineBreaks: false,
                android: {
                    intent: 'INTENT'
                }
            };
            var message = this.smsText;
            this.sms.send(contactNumber, message, options).then((data) => {
                alert(JSON.stringify(data));
            }, (err) => {
                alert(JSON.stringify(err));
            });
        },
            // tslint:disable-next-line: no-unused-expression
            (err) => {
                alert(JSON.stringify(err));
            });
    }
}
