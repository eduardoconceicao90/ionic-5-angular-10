import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos(){
    this.abrirUrl('https://www.google.com/maps/search/?api=1&query=ponto+doacao+alimento');
  }

  doarRoupas(){
    this.abrirUrl('https://www.google.com/maps/search/?api=1&query=ponto+doacao+roupa');
  }

  doarSangue(){
    this.abrirUrl('https://www.google.com/maps/search/?api=1&query=ponto+doacao+sangue');
  }

  abrirUrl(url: string){
    window.open(url, '_blank').focus();
  }
}
