import { Product } from '../../Product';
import { IDiscountRule } from './types';

export class DiscountRuleEngine {
    private _rules: Array<IDiscountRule<Product, Product>>;
    constructor() {
        this._rules = [];
    }

    public rule(product: Product) {
        this._rules.find(rule => rule.matches(product))?.process(product);
    }

    public registerRule(rule: IDiscountRule<Product, Product>) {
        this._rules.push(rule);
        return this;
    }

}