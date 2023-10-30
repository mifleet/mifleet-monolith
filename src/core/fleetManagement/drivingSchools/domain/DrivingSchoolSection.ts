import { Entity } from "src/core/shared/domain/Entity";
import { UniqueIdentifier } from "src/core/shared/domain/primitives/UniqueIdentifier";

export class DrivingSchoolSection extends Entity{
    constructor(
        private readonly _id: UniqueIdentifier,
        private readonly _name: string,
        private _direction : string
    ){
        super()
    }

    public get id() {
        return this._id.getValue();
    }

    public get name(): string {
        return this._name;
    }

    public get direction(): string {
        return this._direction;
    }

    static create(_id: string, _name: string, _description: string, _direction: string): DrivingSchoolSection {
        const id = UniqueIdentifier.from(_id);
        return new DrivingSchoolSection(id, _name, _direction);
    }

    public changeDirection(direction : string) : void {
        this._direction = direction;
    }
}
