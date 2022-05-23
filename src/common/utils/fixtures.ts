import { Product } from '../../Product';
import { DiscountStrategy, IProduct } from '../../types';
import { BulkDiscount } from '../discounts/BulkDiscount';
import { IBulkDiscount } from '../discounts/types';

export const mockProduct = (overrides?: Partial<IProduct>) => {
    return new Product({
        sku: 'ipd', price: 54999, quantity: 5, discountRule: {
            code: 'qty001', strategy: DiscountStrategy.bulkDiscount
        }, ...overrides
    });
};

export const mockBulkDiscount = (overrides?: IBulkDiscount) => {
    return new BulkDiscount({
        min: 4, amount: 5000, ...overrides
    });
};