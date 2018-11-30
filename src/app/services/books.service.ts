import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libros.data';
import { Libro } from '../models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  aLibros: Array<Libro>;

  constructor() {
    this.aLibros = LIBROS;
  }

  getLibros(clave) {
    return this.aLibros;
  }

  getLibrosAsync(clave): Promise<Array<Libro>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.aLibros);
      }, 500)
    });
  }

}
