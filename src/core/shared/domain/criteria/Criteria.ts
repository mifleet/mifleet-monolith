import { Filters } from "./filters/Filters";
import { Order } from "./order/Order";

export class Criteria {
    private constructor(
        private readonly filters: Filters,
        private readonly order:  Order,
        private readonly offset : number,
        private readonly limit : number
    ) { }

    public static from(
        filters: Filters,
        orders: Order,
        offset: number,
        limit: number
    ): Criteria {
        return new Criteria(filters, orders, offset, limit);
    }
}
