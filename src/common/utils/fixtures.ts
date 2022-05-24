import { Product } from '../../Product';
import { DiscountStrategy, IProduct } from '../../types';
import { BulkDiscount } from '../discounts/BulkDiscount';
import { QuantityPricedDiscount } from '../discounts/QuantityPricedDiscount';
import { IBulkDiscount, IQuantityPricedDiscount } from '../discounts/types';

export const mockProduct = (overrides?: Partial<IProduct>) => {
    return new Product({
        sku: 'ipd', price: 54999, quantity: 5, discountRule: {
            code: 'qty001', strategy: DiscountStrategy.bulkDiscount
        }, ...overrides
    });
};

export const mockBulkDiscount = (overrides?: IBulkDiscount) => {
    return new BulkDiscount({
        qty001: { min: 4, amount: 5000 }, ...overrides
    });
};

export const mockQuantityPricedDiscount = (overrides?: IQuantityPricedDiscount) => {
    return new QuantityPricedDiscount({
        qty001: { min: 3, discountThreshold: 2 }, ...overrides
    });
};