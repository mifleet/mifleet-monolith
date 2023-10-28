import { FilterField } from "./FilterField";
import { FilterOperator, FilterOperatorFactory } from "./FilterOperator";
import { FilterValue } from "./FilterValue";

export class Filter{
    private readonly _field: FilterField
    private readonly _operator: FilterOperator
    private readonly _value: FilterValue

    private constructor(
        field: string,
        operator: string,
        value: string
    ){

        this._field = FilterField.from(field);
        this._operator = FilterOperatorFactory.from(operator);
        this._value = FilterValue.from(value);
    }

    public get field(): FilterField {
        return this._field;
    }

    public get operator(): FilterOperator {
        return this._operator;
    }

    public get value(): FilterValue {
        return this._value;
    }

    public static from(field: string, operator: string, value: string): Filter {
        return new Filter(field, operator, value);
    }

    public toString(): string {
        return `${this.field} ${this.operator} ${this.value}`;
    }
}
