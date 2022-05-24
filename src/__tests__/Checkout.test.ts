import { DiscountStrategy } from '../types';
import { Product } from '../Product';
import { Checkout } from '../Checkout';
import { discountRulesEngine } from '../common/discounts';
import { mockProduct } from '../common/utils/fixtures';

describe('Checkout', () => {
    let checkout: Checkout;
    it('total $249.00 for 3 atv and 1 vga', () => {
        const atv = new Product({
            sku: 'atv', price: 10950, discountRule: {
                code: 'qty001', strategy: DiscountStrategy.quantityPriced
            }
        });
        const vga = new Product({ sku: 'vga', price: 3000 });
        checkout = new Checkout(discountRulesEngine);

        checkout.scan(atv);
        checkout.scan(atv);
        checkout.scan(atv);
        checkout.scan(vga);

        expect(checkout.total).toEqual('$249.00');
    });

    it('total $2718.95 for 2 atv and 5 ipd', () => {
        const atv = new Product({
            sku: 'atv', price: 10950, discountRule: {
                code: 'qty001', strategy: DiscountStrategy.quantityPriced
            }
        });
        const ipd = mockProduct({ quantity: 0 });
        checkout = new Checkout(discountRulesEngine);

        checkout.scan(atv);
        checkout.scan(ipd);
        checkout.scan(ipd);
        checkout.scan(atv);
        checkout.scan(ipd);
        checkout.scan(ipd);
        checkout.scan(ipd);

        expect(checkout.total).toEqual('$2718.95');
    });
});