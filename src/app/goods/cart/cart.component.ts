import { CartService } from './cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Goods } from '../goods.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  goodsCart: Goods[] = [];
  constructor(private carts: CartService) { }

  ngOnInit() {
    this.goodsCart = this.carts.getCarts();
    setTimeout(() => {
      console.log(this.goodsCart);
    }, 5000);
  }


}
