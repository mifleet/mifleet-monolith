import { ValueObject } from "../../ValueObject";

export class FilterField extends ValueObject<string>{
    public validate(): void {
        if(this.value.length < 3){
            throw new Error("Invalid filter field");
        }
    }

    public static from(value: string): FilterField {
        return new FilterField(value);
    }
}
