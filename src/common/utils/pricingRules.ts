import { DiscountRule } from '../discounts/types';

export const pricingRules: DiscountRule = {
    quantityPriced: {
        qty001: {
            min: 3,
            payQtyThreshold: 2
        }
    },
    bulkDiscount: {
        qty001: {
            min: 4,
            amount: 5000
        }
    }
};