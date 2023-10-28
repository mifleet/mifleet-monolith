import { OrderField } from "./OrderField";
import { OrderType, OrderTypeFactory } from "./OrderType";

export class Order{

    private readonly _field  : OrderField;
    private readonly _type   : OrderType;

    private constructor(
        field: string,
        direction: string
    ) {
        this._field = OrderField.from(field);
        this._type = OrderTypeFactory.from(direction);
    }

    public static from(field: string, direction: string): Order {
        return new Order(field, direction);
    }

    get field(): string {
        return this._field.getValue();
    }

    get type(): string {
        return this._type;
    }
}
