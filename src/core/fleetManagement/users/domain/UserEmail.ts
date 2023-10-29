import { DomainError } from "../../../shared/domain/DomainError";
import { ValueObject } from "../../../shared/domain/ValueObject";

export class UserEmail extends ValueObject<string>{
    public validate(): void {
        if (!this.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            throw new DomainError("Invalid email");
        }
    }

    public static from(value: string): UserEmail {
        return new UserEmail(value);
    }
}
