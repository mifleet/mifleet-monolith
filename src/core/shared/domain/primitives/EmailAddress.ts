import { StringValueObject } from "./StringValueObject";

export  class EmailAddress extends StringValueObject{
    public static create(value: string): EmailAddress {
        return new EmailAddress(value);
    }

    public validate() : void{
        if (!this.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            throw new Error("Invalid email address");
        }
    }
}
