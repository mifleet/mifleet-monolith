import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";

export class Teacher{

    private constructor(
        private readonly   _id: UniqueIdentifier,
        private readonly       _userId: UniqueIdentifier,
        private _drivingSchoolSectionId : UniqueIdentifier
    ){}

    public get id(){
        return this._id.getValue();
    }

    public get userId(){
        return this._userId.getValue();
    }

    public get drivingSchoolSectionId() : string {
        return this._drivingSchoolSectionId.getValue();
    }

    public changeSection(sectionId : string) : void {
        this._drivingSchoolSectionId = UniqueIdentifier.from(sectionId);
    }

    public static from({
        id,
        userId, 
        drivingSchoolSectionId
    }: { id: string; userId: string; drivingSchoolSectionId: string; }): Teacher {
        const _id = UniqueIdentifier.from(id);
        const _drivingSchoolSectionId = UniqueIdentifier.from(drivingSchoolSectionId);
        const _userId = UniqueIdentifier.from(userId);
        const user = new Teacher(_id, _userId, _drivingSchoolSectionId);
        return user;
    }
}
