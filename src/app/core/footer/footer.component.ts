import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  lugar: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Sergio González';
    this.empresa = 'Devoteam Drago';
    this.lugar = 'Madrid' ;
    this.fecha = new Date();
  }

}
