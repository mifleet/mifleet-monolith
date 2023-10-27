import { DomainError } from "../../../shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserEmail extends ValueObject<string>{
    public validate(): void {
        if(!this.value.includes("@")){
            throw new DomainError("Invalid email");
        }
    }
}
