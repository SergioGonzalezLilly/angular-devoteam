import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  altura: number;
  precio: number;
  producto: string;
  fecha: Date;
  oDatos: {};
  frase: string;

  constructor() { }

  ngOnInit() {
    this.producto = 'Peluche';
    this.altura = 25.5;
    this.precio = 40;
    this.fecha = new Date();
    this.frase = 'Angular is Magic'

    this.oDatos = {
      producto: 'Peluche',
      altura: 25.5,
      precio: 40,
    }
  }

}
