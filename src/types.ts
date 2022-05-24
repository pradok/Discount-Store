export interface IProduct {
    sku: string;
    price: number;
    quantity: number;
    discountRule?: DiscountRule;
}

export interface DiscountRule {
    strategy: DiscountStrategy, code: string
}

export enum DiscountStrategy {
    quantityPriced = 'quantityPriced',
    bulkDiscount = 'bulkDiscount'
}