import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";
import { AggregateRoot } from "../../../../core/shared/domain/AggregateRoot";
import { DrivingSchoolColors } from "./DrivingSchoolColor";
import { DrivingSchoolLogo } from "./DrivingSchoolLogo";
import { DrivingSchoolName } from "./DrivingSchoolName";

export class DrivingSchool extends AggregateRoot {

    private readonly _id: UniqueIdentifier;
    private readonly _name : DrivingSchoolName;
    private readonly _logo : DrivingSchoolLogo;
    private readonly _color : DrivingSchoolColors;

    constructor(id: string, name: string, logo: string, color: string) {
        super();
        this._id = UniqueIdentifier.from(id);
        this._name = DrivingSchoolName.from(name);
        this._logo = DrivingSchoolLogo.from(logo);
        this._color = DrivingSchoolColors.from(color);
    }

    public get id() {
        return this._id.getValue();
    }

    public get name() {
        return this._name.getValue();
    }

    public get logo() {
        return this._logo.getValue();
    }

    public get color() {
        return this._color.getValue();
    }

    public static create(id: string, name: string, logo: string, color: string): DrivingSchool {
        const drivingSchool = new DrivingSchool(id, name, logo, color);
        //add domain events here
        // drivingSchool.record(new DrivingSchoolCreatedDomainEvent(id, name, logo, color));
        return drivingSchool;
    }
}
