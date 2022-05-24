import { DiscountStrategy } from '../../types';
import { Product } from '../../Product';
import { IDiscountRule, IQuantityPricedDiscount } from './types';

export class QuantityPricedDiscount implements IDiscountRule<Product, Product> {
    private _quantityDiscount: IQuantityPricedDiscount;

    constructor(discount: IQuantityPricedDiscount) {
        this._quantityDiscount = discount;
    }
    public process(input: Product): Product {
        if (input.quantity >= this._quantityDiscount[input.discountRule?.code].min) {
            const { min: minQty } = this._quantityDiscount[input.discountRule.code];
            const { discountThreshold } = this._quantityDiscount[input.discountRule.code];
            const parts = Math.trunc(input.quantity / minQty);
            const payQty = (parts * discountThreshold) + (input.quantity % minQty);
            const discountQty = input.quantity - payQty;
            input.totalDiscount = discountQty * input.price;
        }
        return input;
    }
    public matches(input: Product): boolean {
        return input.discountRule?.strategy === DiscountStrategy.quantityPriced;
    }
}