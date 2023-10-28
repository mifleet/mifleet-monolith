import { ValueObject } from "../../ValueObject";

export class FilterValue extends ValueObject<string>{
    public validate(): void {
        if (this.value.length < 3) {
            throw new Error("Invalid filter value");
        }
    }

    public static from(value: string): FilterValue {
        return new FilterValue(value);
    }
}

