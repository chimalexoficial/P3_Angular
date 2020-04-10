import { Component, OnInit, Input } from '@angular/core';
import { Product, Especificacion } from 'src/app/productos/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];

  @Input() product: Product;
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.products = [new Product(100, 'Smartphone',
      'LG', 'Quadcore 3GHZ', 12000, 5, Especificacion[0]),
    new Product(101, 'Smartwatch',
      'LG', '3GB de RAM', 4000, 0, Especificacion[1]),
    new Product(102, 'SmartTV',
      'LG', 'Con WiFi', 14000, 1, Especificacion[2])];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      //this.getProduct(id);
    });
  }



  editProduct() {
    this.router.navigate(['/edit', this.product.uid]);
  }
  }
