import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../Product';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductsService) {
               }
  @ViewChild('f') form: NgForm;
  products: Product[];
  uid: number;
  modoAdd = true;
  marca = ['LG', 'Samsung', 'Apple'];

p = {
  nombre: 'jasminaae'
};



  ngOnInit(): void {
    this.route.params.subscribe(
        (params) => {
            if (params['id']){
              this.uid = params['id'];
              this.modoAdd = false;
            }else {
              this.modoAdd = true;
            }
        }
    );
  }


  procesarFormulario(form: NgForm) {
    console.log('Procesando...');
  }
}

