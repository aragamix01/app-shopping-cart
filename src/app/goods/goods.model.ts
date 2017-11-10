export class Goods {
    name: string;
    price: number;
    description: string;
    pics: string;
    isSold: boolean;
    isHaveSize: boolean;
    size: string[];

    constructor(name: string, price: number, description: string,
        pics: string, isSold: boolean, isHaveSize: boolean, size: string[]) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.pics = pics;
        this.isSold = isSold;
        this.isHaveSize = isHaveSize;
        this.size = size;
    }
}
