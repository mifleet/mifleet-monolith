import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";
import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { Teacher } from "./Teacher";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserRole } from "./UserRole";
import { Owner } from "./Owner";

export abstract class User extends AggregateRoot {

    protected _role: UserRole

    constructor(
        private readonly _id: UniqueIdentifier,
        private readonly _firstName: UserFirstName,
        private readonly _lastName: UserLastName,
        private readonly _email: UserEmail,
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


}
