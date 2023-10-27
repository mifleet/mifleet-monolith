import { Entity } from "../../../../core/shared/domain/Entity";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserId } from "./UserId";
import { UserLastName } from "./UserLastName";

export class User extends Entity{
    private readonly _id : UserId;
    private readonly _firstName : UserFirstName;
    private readonly _lastName : UserLastName;
    private readonly _email : UserEmail;

    constructor(id : number, firstName : string, lastName : string, email : string){
        super();
        this._id = new UserId(id);
        this._firstName = new UserFirstName(firstName);
        this._lastName = new UserLastName(lastName);
        this._email = new UserEmail(email);
    }

    public get id() : number{
        return this._id.getValue();
    }

    public get firstName() : string{
        return this._firstName.getValue();
    }

    public get lastName() : string{
        return this._lastName.getValue();
    }

    public get email() : string{
        return this._email.getValue();
    }
}
