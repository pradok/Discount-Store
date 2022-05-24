import { Product } from '../../../Product';
import { mockBulkDiscount, mockProduct } from '../../utils/fixtures';
import { DiscountRuleEngine } from '../DiscountRuleEngine';

describe('DiscountRuleEngine', () => {
    describe('rule', () => {
        it('applies bulk discount rule where applicable', () => {
            const bulkDiscount = mockBulkDiscount();
            const discountRuleEngine = new DiscountRuleEngine();
            const productIpad = mockProduct();
            const productAppleTv = new Product({
                sku: 'ipd', price: 54999, quantity: 5,
            });
            discountRuleEngine.registerRule(bulkDiscount);
            discountRuleEngine.rule(productIpad);
            discountRuleEngine.rule(productAppleTv);

            expect(productAppleTv.totalDiscount).toEqual(0);
            expect(productIpad.totalDiscount).toEqual(25000);

        });
    });
});