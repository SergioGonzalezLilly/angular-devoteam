import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dvtPrueba]'
})
export class PruebaDirective {

  constructor(private eTarget: ElementRef) {
    console.log('Aplicando directiva de prueba');
    console.log(this.eTarget);
    this.eTarget.nativeElement.innerHTML = 'Nuevo título: ';
   }

}
