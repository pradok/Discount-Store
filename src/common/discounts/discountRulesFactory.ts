import { DiscountStrategy } from '../../types';
import { discountStrategyRules } from '../utils/discountStrategyRules';
import { BulkDiscount } from './BulkDiscount';
import { QuantityPricedDiscount } from './QuantityPricedDiscount';
import { IBulkDiscount, IQuantityPricedDiscount } from './types';

const buildQuantityPricedDiscountRules = (discountRule: IQuantityPricedDiscount): QuantityPricedDiscount[] => {
    const rules: QuantityPricedDiscount[] = [];
    for (const discountCode in discountRule) {
        rules.push(new QuantityPricedDiscount({
            [discountCode]: {
                min: discountRule[discountCode].min,
                payQtyThreshold: discountRule[discountCode].payQtyThreshold
            }
        }));
    }

    return rules;
};

const buildBulkDiscountRules = (discountRule: IBulkDiscount): BulkDiscount[] => {
    const rules: BulkDiscount[] = [];
    for (const discountCode in discountRule) {
        rules.push(new BulkDiscount({
            [discountCode]: {
                min: discountRule[discountCode].min,
                amount: discountRule[discountCode].amount
            }
        }));
    }

    return rules;
};

export const discountRulesFactory = () => {
    const discountRules: Array<BulkDiscount | QuantityPricedDiscount> = [];
    for (const discountRule in discountStrategyRules) {
        if (discountRule === DiscountStrategy.quantityPriced) {
            discountRules.push(...buildQuantityPricedDiscountRules(discountStrategyRules[discountRule]));
        }
        if (discountRule === DiscountStrategy.bulkDiscount) {
            discountRules.push(...buildBulkDiscountRules(discountStrategyRules[discountRule]));
        }
    }
    return discountRules;
};
