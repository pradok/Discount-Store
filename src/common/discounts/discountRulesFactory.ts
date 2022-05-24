import { DiscountStrategy } from '../../types';
import { pricingRules } from '../utils/pricingRules';
import { BulkDiscount } from './BulkDiscount';
import { QuantityPricedDiscount } from './QuantityPricedDiscount';
import { IBulkDiscount, IQuantityPricedDiscount } from './types';

const buildQuantityPricedDiscountRules = (discountRule: IQuantityPricedDiscount): QuantityPricedDiscount[] => {
    const rules: QuantityPricedDiscount[] = [];
    for (const discountCode in discountRule) {
        rules.push(new QuantityPricedDiscount({
            [discountCode]: {
                min: discountRule[discountCode].min,
                discountThreshold: discountRule[discountCode].discountThreshold
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
    for (const discountRule in pricingRules) {
        if (discountRule === DiscountStrategy.quantityPriced) {
            discountRules.push(...buildQuantityPricedDiscountRules(pricingRules[discountRule]));
        }
        if (discountRule === DiscountStrategy.bulkDiscount) {
            discountRules.push(...buildBulkDiscountRules(pricingRules[discountRule]));
        }
    }
    return discountRules;
};
