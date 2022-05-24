import { DiscountStrategy } from '../../../types';
import { Product } from '../../../Product';
import { mockProduct, mockQuantityPricedDiscount } from '../../utils/fixtures';
import { QuantityPricedDiscount } from '../QuantityPricedDiscount';

describe('QuantityPricedDiscount', () => {
    let product: Product;
    let bulkDiscount: QuantityPricedDiscount;
    beforeEach(() => {
        bulkDiscount = mockQuantityPricedDiscount();
    });

    describe('process', () => {
        it('total price to 43800 with discount of 21900', () => {
            product = mockProduct({
                sku: 'atv', price: 10950, quantity: 6, discountRule: {
                    code: 'qty001', strategy: DiscountStrategy.quantityPriced
                }
            });
            bulkDiscount.process(product);
            expect(product.totalDiscount).toEqual(21900);
            expect(product.totalPrice).toEqual(43800);
        });

        it('total price of 54750 with discount of 21900', () => {
            product = mockProduct({
                sku: 'atv', price: 10950, quantity: 7, discountRule: {
                    code: 'qty001', strategy: DiscountStrategy.quantityPriced
                }
            });
            bulkDiscount.process(product);
            expect(product.totalDiscount).toEqual(21900);
            expect(product.totalPrice).toEqual(54750);
        });

        it('total price of 54750 with discount of 21900', () => {
            product = mockProduct({
                sku: 'atv', price: 10950, quantity: 14, discountRule: {
                    code: 'qty001', strategy: DiscountStrategy.quantityPriced
                }
            });
            bulkDiscount.process(product);
            expect(product.totalDiscount).toEqual(43800);
            expect(product.totalPrice).toEqual(109500);
        });
    });

    describe('matches', () => {
        it('returns true', () => {
            product = mockProduct({
                sku: 'atv', price: 10950, quantity: 6, discountRule: {
                    code: 'qty001', strategy: DiscountStrategy.quantityPriced
                }
            });
            expect(bulkDiscount.matches(product)).toEqual(true);
        });

        it('returns false', () => {
            product = mockProduct({ discountRule: undefined });
            expect(bulkDiscount.matches(product)).toEqual(false);
        });
    });
});