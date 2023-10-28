import { ValueObject } from "src/core/shared/domain/ValueObject";

export class DrivingSchoolId extends ValueObject<number> {
    public validate(): void {
        if (this.value < 0) {
            throw new Error("Invalid id");
        }
    }

    public static from(value: number): DrivingSchoolId {
        const drivingSchoolId = new DrivingSchoolId(value);
        if (drivingSchoolId.isEmpty()) {
            throw new Error("Invalid id");
        }
        return drivingSchoolId;
    }

    public isEmpty(): boolean {
        return this.value === null;
    }

    public static empty(): DrivingSchoolId {
        return new DrivingSchoolId(null);
    }
}
