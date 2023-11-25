import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";

export class Owner{
    private constructor(
        private readonly _id: UniqueIdentifier,
        private readonly _userId : UniqueIdentifier,
        private _drivingSchoolId ?: UniqueIdentifier
    ){}

    public get id(){
        return this._id.getValue();
    }

    public get userId(){
        return this._userId.getValue();
    }

    public get drivingSchoolId() : string {
        return this._drivingSchoolId.getValue();
    }

    public setDrivingSchoolId(drivingSchoolId : string) : void {
        if(this._drivingSchoolId !== undefined){
            throw new Error("Driving school id already set");
        }
        this._drivingSchoolId = UniqueIdentifier.from(drivingSchoolId);
    }

    public static from({ id, userId, drivingSchoolId }: { id: string; userId: string; drivingSchoolId: string; }): Owner {
        const _id = UniqueIdentifier.from(id);
        const _userId = UniqueIdentifier.from(userId);
        const _drivingSchoolId = UniqueIdentifier.from(drivingSchoolId);
        const user = new Owner(_id,  _userId, _drivingSchoolId);
        return user;
    }
}
