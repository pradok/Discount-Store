import { DiscountRuleEngine } from './common/discounts/DiscountRuleEngine';
import { Product } from './Product';

export class Checkout {
    private _cart: Product[] = [];
    constructor(private _discountRules: DiscountRuleEngine) { }

    public scan(newItem: Product) {
        const existingItem = this._cart.find(item => item.sku === newItem.sku);
        if (existingItem) {
            existingItem.setQuantity(1);
        } else {
            newItem.setQuantity(1);
            this._cart.push(newItem);
        }
    }

    public get total() {
        let total = 0;
        this._cart.forEach(item => {
            this._discountRules.rule(item);
            total += item.totalPrice;
        });
        return `$${(total * 0.01).toFixed(2)}`;
    }


}