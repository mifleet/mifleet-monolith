import { DomainError } from "../../../../core/shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserFirstName extends ValueObject<string>{
    public validate(): void {
        if(this.value.length < 3){
            throw new DomainError("Invalid first name");
        }
    }

    public static from(value: string): UserFirstName {
        return new UserFirstName(value);
    }
}
