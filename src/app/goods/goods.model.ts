export class Goods {
    name: string;
    price: number;
    description: string;
    pics: string;
    isSold: boolean;

    constructor(name: string, price: number, description: string, pics: string, isSold: boolean) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.pics = pics;
        this.isSold = isSold;
    }
}
