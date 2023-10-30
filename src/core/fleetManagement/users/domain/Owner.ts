import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";
import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserRole } from "./UserRole";

export class Owner extends User {
    constructor(
        _id: UniqueIdentifier,
        _firstName: UserFirstName,
        _lastName: UserLastName,
        _email: UserEmail, 
        private _drivingSchoolId ?: UniqueIdentifier
    ){
        super(_id, _firstName, _lastName, _email);
        this._role = UserRole.teacher();
    }

    public drivingSchoolId() : string {
        return this._drivingSchoolId.getValue();
    }

    public setDrivingSchoolId(drivingSchoolId : string) : void {
        if(this._drivingSchoolId !== undefined){
            throw new Error("Driving school id already set");
        }
        this._drivingSchoolId = UniqueIdentifier.from(drivingSchoolId);
    }

    public static from({ id, firstName, lastName, email }: { id: string; firstName: string; lastName: string; email: string; }): Owner {
        const _id = UniqueIdentifier.from(id);
        const _firstName = UserFirstName.from(firstName);
        const _lastName = UserLastName.from(lastName);
        const _email = UserEmail.from(email);
        const user = new Owner(_id, _firstName, _lastName, _email);
        return user;
    }
}
