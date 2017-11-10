import { Goods } from './../goods.model';

export class CartService {
    carts: Goods = new Goods(
        'Test',
        250,
        'text',
        'https://www.customink.com/mms/images/catalog/styles/297300/catalog_detail_image_large.jpg',
        true,
        false,
        []
    );

    getCarts() {
        return this.carts;
    }

    addCarts(goods: Goods) {
        this.carts = goods;
    }
}
