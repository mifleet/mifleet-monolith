import { ValueObject } from "src/core/shared/domain/ValueObject";

export class DrivingSchoolColors extends ValueObject<string>{
    public validate(): void {
        if (this.value.length < 3) {
            throw new Error("Invalid driving school color");
        }
    }

    public static from(value: string): DrivingSchoolColors {
        return new DrivingSchoolColors(value);
    }
}
