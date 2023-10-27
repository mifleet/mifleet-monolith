import { DomainError } from "../../../../core/shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserLastName extends ValueObject<string>{
    public validate(): void {
        if(this.value.length < 3){
            throw new DomainError("Invalid last name");
        }
    }
}

