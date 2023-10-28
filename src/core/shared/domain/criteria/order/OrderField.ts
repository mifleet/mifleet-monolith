import { ValueObject } from "../../ValueObject";

export class OrderField extends ValueObject<string>{
    public validate(): void {
        if(this.value.length < 0){
            throw new Error("Invalid order field");
        }
    }

    public static from(value: string): OrderField {
        return new OrderField(value);
    }
}
