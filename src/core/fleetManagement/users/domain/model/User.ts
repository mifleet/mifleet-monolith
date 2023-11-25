import { UniqueIdentifier } from "@core/shared/domain/primitives/UniqueIdentifier";
import { AggregateRoot } from "../../../../../core/shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserRole } from "./UserRole";

interface CreateUserDTO{
    id : string,
    firstName : string,
    lastName : string,
    email : string,
}

export class User extends AggregateRoot {
    protected _role: UserRole

    private constructor(
        private readonly _id: UniqueIdentifier,
        private readonly _firstName: UserFirstName,
        private readonly _lastName: UserLastName,
        private readonly _email: UserEmail,
        private readonly _userRole : UserRole
    ) {
        super();
    }

    public get id() {
        return this._id.getValue();
    }

    public get firstName(): string {
        return this._firstName.getValue();
    }

    public get lastName(): string {
        return this._lastName.getValue();
    }

    public get email(): string {
        return this._email.getValue();
    }

    public static owner(data : CreateUserDTO){
        return new User(
            UniqueIdentifier.from(data.id),
            UserFirstName.from(data.firstName),
            UserFirstName.from(data.lastName),
            UserEmail.from(data.email),
            UserRole.owner
        )
    }

    public static teacher(data : CreateUserDTO){
        return new User(
            UniqueIdentifier.from(data.id),
            UserFirstName.from(data.firstName),
            UserFirstName.from(data.lastName),
            UserEmail.from(data.email),
            UserRole.teacher
        )
    }
}
