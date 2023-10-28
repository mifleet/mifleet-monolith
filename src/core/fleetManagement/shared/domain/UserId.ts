import { DomainError } from "../../../../core/shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserId extends ValueObject<number>{
    public validate(): void {
        if(this.value < 0){
            throw new DomainError("Invalid id");
        }
    }

    public static from (value: number): UserId {
        const userId = new UserId(value);
        if (userId.isEmpty()) {
            throw new DomainError("Invalid id");
        }
        return userId;
    }

    public isEmpty(): boolean {
        return this.value === null;
    }

    public static empty(): UserId {
        return new UserId(null);
    }

}
