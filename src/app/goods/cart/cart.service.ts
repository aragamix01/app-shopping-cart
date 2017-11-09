import { Goods } from './../goods.model';

export class CartService {
    carts: Goods[] = [
        new Goods(
            'Test',
            250,
            'TestDesc',
            'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
            true
        )
    ];

    getCarts() {
        console.log(this.carts);
        return this.carts;
    }

    addCarts(goods: Goods) {
        let check = false;
        if (this.carts.length > 0) {
            this.carts.forEach(cart => {
                if (goods.name === cart.name) {
                    check = true;
                }
            });
        }
        check === false ? this.carts.push(goods) : console.log('dup');
    }
}
