import { ValueObject } from "src/core/shared/domain/ValueObject";

export class DrivingSchoolName extends ValueObject<string> {

    public validate(): void {
        if (this.value.length < 3) {
            throw new Error("Invalid driving school name");
        }
    }

    public static from(value: string): DrivingSchoolName {
        return new DrivingSchoolName(value);
    }

}
