import {
  Component,
  OnInit
} from '@angular/core';
import {
  Goods
} from './goods.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: Goods[] = [];
  isData = false;

  constructor(private db: AngularFirestore,
              private carts: CartService) {
    db.collection('goods').valueChanges().subscribe(
      (data: any[]) => {
        this.goods = data;
        this.isData = true;
        // console.log(this.goods);
      }
    );
  }

  ngOnInit() {}

  addCarts(goods: Goods) {
    this.carts.addCarts(goods);
  }
}
