import { StringValueObject } from "./StringValueObject";

export class UniqueIdentifier extends StringValueObject{
    public static create(value: string): UniqueIdentifier {
        return new UniqueIdentifier(value);
    }

    public validate() : void{
        if (!this.value.match(/^[a-zA-Z0-9_.+-]+$/)) {
            throw new Error("Invalid unique identifier");
        }
    }
}
