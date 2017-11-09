import {
  Component,
  OnInit
} from '@angular/core';
import {
  Goods
} from './goods.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: Goods[] = [];

  constructor(private db: AngularFirestore) {
    db.collection('goods').valueChanges().subscribe(
      (data: any[]) => {
        this.goods = data;
        console.log(this.goods);
      }
    );
  }

  ngOnInit() {}

}
