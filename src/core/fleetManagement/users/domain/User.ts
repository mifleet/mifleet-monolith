import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserId } from "./UserId";
import { UserLastName } from "./UserLastName";
import { UserRegisteredDomainEvent } from "./UserRegisteredDomainEvent";

export class User extends AggregateRoot {
    constructor(private readonly _id: UserId,
        private readonly _firstName: UserFirstName,
        private readonly _lastName: UserLastName,
        private readonly _email: UserEmail) {
        super();
    }

    public get id(): number {
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

    public static create(_id: number, _firstName: string, _lastName: string, _email: string): User {
        const id = UserId.from(_id);
        const firstName = UserFirstName.from(_firstName);
        const lastName = UserLastName.from(_lastName);
        const email = UserEmail.from(_email);

        const user = new User(id, firstName, lastName, email);
        user.record(new UserRegisteredDomainEvent(user.id, user.firstName, user.lastName, user.email));
        return user;
    }
}
