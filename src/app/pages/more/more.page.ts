import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  constructor( @Inject(DOCUMENT) document) {   document.getElementById('p');
}
items = [
  {
    name: 'Qual a Problemática ?',
    items: [
      'O aplicativo Todas Por Uma, propõe solucionar a problemática de assédio na sociedade atual, sendo ele físico, sexual ou verbal. O Usuário do aplicativo poderá utilizar de avisos "Pedido de socorro" enviados para contatos selecionados ou Anjo, para conseguir a ajuda necessária no momento de apuros.'
       ]
  }
];
visibleIndex = -1;
showSubItem(ind) {
  if (this.visibleIndex === ind) {
    this.visibleIndex = -1;
  } else {
    this.visibleIndex = ind;
  }
}

// tslint:disable-next-line: member-ordering
items1 = [
  {
    name: 'desigualdade de genero existe?',
    items: [
      'O aplicativo Todas Por Uma, propõe solucionar a problemática de assédio na sociedade atual, sendo ele físico, sexual ou verbal. O Usuário do aplicativo poderá utilizar de avisos "Pedido de socorro" enviados para contatos selecionados ou Anjo, para conseguir a ajuda necessária no momento de apuros.'
       ]
  }
];
visibleIndex1 = -1;
showSubItem1(ind) {
  if (this.visibleIndex1 === ind) {
    this.visibleIndex1 = -1;
  } else {
    this.visibleIndex1 = ind;
  }
}

  ngOnInit() {
  }

show(){
 

}

}
