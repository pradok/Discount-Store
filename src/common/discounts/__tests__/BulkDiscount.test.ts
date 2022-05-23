import { Product } from '../../../Product';
import { mockBulkDiscount, mockProduct } from '../../utils/fixtures';
import { BulkDiscount } from '../BulkDiscount';

describe('BulkDiscount', () => {
    let product: Product;
    let bulkDiscount: BulkDiscount;
    beforeEach(() => {
        bulkDiscount = mockBulkDiscount();
    });

    describe('process', () => {
        it('total price to 249995 with discount of 25000', () => {
            product = mockProduct();
            bulkDiscount.process(product);
            expect(product.totalPrice).toEqual(249995);
            expect(product.totalDiscount).toEqual(25000);
        });

        it('total price to 219996 with discount of 0', () => {
            product = mockProduct({ quantity: 4 });
            bulkDiscount.process(product);
            expect(product.totalPrice).toEqual(219996);
            expect(product.totalDiscount).toEqual(0);
        });
    });
});