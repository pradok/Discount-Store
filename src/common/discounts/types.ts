export interface IDiscountRule<Input, Output> {
    matches(input: Input): boolean,
    process(input: Input): Output
}

export interface IBulkDiscount {
    min: number,
    amount: number;
}