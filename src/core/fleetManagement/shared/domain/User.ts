import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserId } from "./UserId";
import { UserLastName } from "./UserLastName";

export class User extends AggregateRoot {
    private readonly _id: UserId;
    private readonly _firstName: UserFirstName;
    private readonly _lastName: UserLastName;
    private readonly _email: UserEmail;

    constructor(id: number, firstName: string, lastName: string, email: string) {
        super();
        this._id = UserId.from(id);
        this._firstName = UserFirstName.from(firstName);
        this._lastName = UserLastName.from(lastName);
        this._email = UserEmail.from(email);
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

    public static create(id: number, firstName: string, lastName: string, email: string): User {
        const user = new User(id, firstName, lastName, email);
        //add domain events here
        // user.record(new UserCreatedDomainEvent(id, firstName, lastName, email));
        return user;
    }
}
