import { DomainError } from "../../../../core/shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserId extends ValueObject<number>{
    public validate(): void {
        if(this.value < 0){
            throw new DomainError("Invalid id");
        }
    }
}
