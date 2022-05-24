import { BulkDiscount } from '../BulkDiscount';
import { discountRulesFactory } from '../discountRulesFactory';
import { QuantityPricedDiscount } from '../QuantityPricedDiscount';

describe('discountRulesFactory', () => {
    it('Returns collection of discount rules', () => {
        const discountRules = discountRulesFactory();
        expect(discountRules).toHaveLength(2);
        expect(discountRules[0]).toBeInstanceOf(QuantityPricedDiscount);
        expect(discountRules[1]).toBeInstanceOf(BulkDiscount);
    });
});