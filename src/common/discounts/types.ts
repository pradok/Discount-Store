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
        discountThreshold: number;
    }
}