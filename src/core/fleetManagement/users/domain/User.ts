import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";
import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserRegisteredDomainEvent } from "./UserRegisteredDomainEvent";

export class User extends AggregateRoot {
    constructor(
        private readonly _id: UniqueIdentifier,
        private readonly _firstName: UserFirstName,
        private readonly _lastName: UserLastName,
        private readonly _email: UserEmail) {
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

    public static create(_id: string, _firstName: string, _lastName: string, _email: string): User {
        const id = UniqueIdentifier.from(_id);
        const firstName = UserFirstName.from(_firstName);
        const lastName = UserLastName.from(_lastName);
        const email = UserEmail.from(_email);

        const user = new User(id, firstName, lastName, email);
        user.record(new UserRegisteredDomainEvent(user.id, user.firstName, user.lastName, user.email));
        return user;
    }
}
