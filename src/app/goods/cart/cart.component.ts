import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from './cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Goods } from '../goods.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Goods;
  buyForm: FormGroup;

  constructor(private carts: CartService) { }

  ngOnInit() {
    this.cart = this.carts.getCarts();
    this.buyForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'tel': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.buyForm);
  }


}
