import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libros.model';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  baseUrl: string;
  aLibros: Array<Libro>;

  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiLibros;
   }

   getLibros(clave: string) {
    const url = this.baseUrl + clave;
    return this.http.get(url).toPromise().then(
      (response: any) => {
        this.aLibros = response.items.map(
          (item) => { return this.procesarLibro(item); }
        );
        return new Promise(
          (resolve) => { resolve(this.aLibros); }
        );
      }, // response
      (error) => {}
    ); // toPromise()
   } // getLibros()


  private procesarLibro(item: any) {
    const libro = new Libro();
    libro.id = item.id;
    libro.titulo = item.volumeInfo.title;
    if (item.volumeInfo.authors) {
      libro.autor = item.volumeInfo.authors.join(' | ');
    }
    return libro;
  }
} // class GoogleBooksService
