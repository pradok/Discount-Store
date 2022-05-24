import { DiscountStrategy } from 'src/types';

export interface IDiscountRule<Input, Output> {
    matches(input: Input): boolean,
    process(input: Input): Output
}

export interface IBulkDiscount {
    [key: string]: {
        min: number,
        amount: number;
    }
}

export interface IQuantityPricedDiscount {
    [key: string]: {
        min: number,
        payQtyThreshold: number;
    }
}

export interface DiscountRule {
    quantityPriced: IQuantityPricedDiscount,
    bulkDiscount: IBulkDiscount
}