import { DomainError } from "src/core/shared/domain/DomainError";
import { ValueObject } from "src/core/shared/domain/ValueObject";

export class UserRole extends ValueObject<string>{
    public static readonly OWNER = "OWNER";
    public static readonly TEACHER = "TEACHER";
    public static readonly SECRETARY = "SECRETARY";

    validate(): void{
        if(this.value !== UserRole.OWNER && this.value !== UserRole.TEACHER && this.value !== UserRole.SECRETARY){
            throw new DomainError("Invalid user role");
        }
    }

    static get owner() : UserRole {
        return new UserRole(this.OWNER);
    }

    static get teacher() : UserRole {
        return new UserRole(this.TEACHER);
    }

    static get secretary() : UserRole {
        return new UserRole(this.SECRETARY);
    }
}
