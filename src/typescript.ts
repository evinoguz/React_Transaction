export type currencyState="TRT" | "USD" | "EUR"
export interface ITransaction {
    id:number| null,
    name:string,
    description:string|null,
    date:Date|null,
    amount:number,
    currency:currencyState,
  } 