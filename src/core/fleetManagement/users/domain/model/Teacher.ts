import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";
import { User } from "./User";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserRole } from "./UserRole";

export class Teacher extends User {
    constructor(
        _id: UniqueIdentifier,
        _firstName: UserFirstName,
        _lastName: UserLastName,
        _email: UserEmail, 
        private _drivingSchoolSectionId : UniqueIdentifier
    ){
        super(_id, _firstName, _lastName, _email);
        this._role = UserRole.teacher();
        this._drivingSchoolSectionId = _drivingSchoolSectionId;
    }

    public get drivingSchoolSectionId() : string {
        return this._drivingSchoolSectionId.getValue();
    }

    public changeSection(sectionId : string) : void {
        this._drivingSchoolSectionId = UniqueIdentifier.from(sectionId);
    }

    public static from({
        id,
        firstName,
        lastName,
        email,
        drivingSchoolSectionId
    }: { id: string; firstName: string; lastName: string; email: string; drivingSchoolSectionId: string; }): Teacher {
        const _id = UniqueIdentifier.from(id);
        const _firstName = UserFirstName.from(firstName);
        const _lastName = UserLastName.from(lastName);
        const _email = UserEmail.from(email);
        const _drivingSchoolSectionId = UniqueIdentifier.from(drivingSchoolSectionId);
        const user = new Teacher(_id, _firstName, _lastName, _email, _drivingSchoolSectionId);
        return user;
    }
}
