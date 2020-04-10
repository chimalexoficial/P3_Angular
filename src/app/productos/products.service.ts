import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject, throwError } from 'rxjs';
import {Product} from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  emptyProduct(): Product {
    return {
      uid: 0,
      nombre: '',
      marca: '',
      descripcion: '',
      precio: 0,
      existencia: 0,
      especificacion: []
    };
  }

  getProduct(uid: number): Observable<Product> {
    if (uid === 0) {
      return of(this.emptyProduct());
    }

    if (this.products) {
      const item = this.products.find(e => e.uid === uid);
      if (item) {
        return of(item);
      }
    }
  }

  constructor() { }
}
