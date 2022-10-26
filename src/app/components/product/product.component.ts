import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  product = {
    name: 'Product 1',
    image: './assets/images/toy.jpg',
    price: '100'
  }

  ngOnInit(): void {
  }

}
