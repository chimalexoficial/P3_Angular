import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  uid: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params) => {
        this.uid = params.id;
      }
    );
  }

}
