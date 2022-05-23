import { DiscountRule, IProduct } from './types';

export class Product {
    private sku: string;
    private _quantity: number;
    private _price: number;
    private _totalDiscount = 0;
    private _discountRule: DiscountRule;

    constructor({ sku, price, quantity, discountRule }: IProduct) {
        this.sku = sku;
        this._price = price;
        this._quantity = quantity;
        this._discountRule = discountRule;
    }

    get discountRule() {
        return this._discountRule;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    get totalPrice() {
        return (this._quantity * this._price) - this._totalDiscount;
    }

    get totalDiscount() {
        return this._totalDiscount;
    }

    set totalDiscount(total: number) {
        this._totalDiscount = total;
    }
}