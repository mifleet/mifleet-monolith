import { ValueObject } from "../ValueObject";

export class StringValueObject extends ValueObject<string>{
    public validate(): void {
    }

    public static from(value: string): StringValueObject {
        return new StringValueObject(value);
    }
}

