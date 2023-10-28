import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { DrivingSchoolColors } from "./DrivingSchoolColor";
import { DrivingSchoolId } from "./DrivingSchoolId";
import { DrivingSchoolLogo } from "./DrivingSchoolLogo";
import { DrivingSchoolName } from "./DrivingSchoolName";

export class DrivingSchool extends AggregateRoot {

    private readonly _id: DrivingSchoolId;
    private readonly _name : DrivingSchoolName;
    private readonly _logo : DrivingSchoolLogo;
    private readonly _color : DrivingSchoolColors;

    constructor(id: number, name: string, logo: string, color: string) {
        super();
        this._id = DrivingSchoolId.from(id);
        this._name = DrivingSchoolName.from(name);
        this._logo = DrivingSchoolLogo.from(logo);
        this._color = DrivingSchoolColors.from(color);
    }

    public get id(): number {
        return this._id.getValue();
    }

    public get name(): string {
        return this._name.getValue();
    }

    public get logo(): string {
        return this._logo.getValue();
    }

    public get color(): string {
        return this._color.getValue();
    }

    public static create(id: number, name: string, logo: string, color: string): DrivingSchool {
        const drivingSchool = new DrivingSchool(id, name, logo, color);
        //add domain events here
        // drivingSchool.record(new DrivingSchoolCreatedDomainEvent(id, name, logo, color));
        return drivingSchool;
    }
}
