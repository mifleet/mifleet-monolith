import { DomainError } from "../../../../shared/domain/DomainError";
import { ValueObject } from "../../../../shared/domain/ValueObject";

export class UserEmail extends ValueObject<string>{
    public validate(): void {
    }

    public static from(value: string): UserEmail {
        return new UserEmail(value);
    }
}
