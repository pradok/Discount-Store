import { DiscountStrategy } from '../../types';
import { Product } from '../../Product';
import { IDiscountRule, IBulkDiscount } from './types';

export class BulkDiscount implements IDiscountRule<Product, Product> {
    private _quantityDiscount: IBulkDiscount;

    constructor(discount: IBulkDiscount) {
        this._quantityDiscount = discount;
    }
    public process(input: Product): Product {
        if (input.quantity > this._quantityDiscount.min && input.price > this._quantityDiscount.amount) {
            input.totalDiscount = this._quantityDiscount.amount * input.quantity;
        }
        return input;
    }
    public matches(input: Product): boolean {
        return input.discountRule.strategy === DiscountStrategy.bulkDiscount;
    }
}