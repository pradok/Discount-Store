import { DiscountRule, IProduct } from './types';

export class Product {
    private _sku: string;
    private _quantity = 0;
    private _price: number;
    private _totalDiscount = 0;
    private _discountRule: DiscountRule | undefined;

    constructor({ sku, price, quantity = 0, discountRule }: IProduct) {
        this._sku = sku;
        this._price = price;
        this._quantity = quantity;
        this._discountRule = discountRule;
    }

    get sku() {
        return this._sku;
    }

    get discountRule() {
        return this._discountRule ? this._discountRule : undefined;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(qty: number) {
        this._quantity += qty;
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