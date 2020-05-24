import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angel',
  templateUrl: './angel.page.html',
  styleUrls: ['./angel.page.scss'],
})
export class AngelPage implements OnInit {
  //itens: Array<ItemPedido> = [];

  constructor() { }

  ngOnInit() {
  }
  /**removeItem(index : number){
    this.itens.splice(index,1);
  }
 /*
  gravarPedido() {
    const entity: Pedido = this.form.value;
    entity.idClient = this.cliente.id;
    if (!this.entregarPara){
      entity.idClientEntrega = 0;
    }
    entity.itemPedidos = new Array<ItemPedido>();
    this.itens.forEach(function (value) {
      entity.itemPedidos.push(value);
    });
  }
  */
}
