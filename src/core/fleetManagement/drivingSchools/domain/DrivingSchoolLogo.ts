import { ValueObject } from "src/core/shared/domain/ValueObject";

export class DrivingSchoolLogo extends ValueObject<string> {
    public validate(): void {
        if (this.value.length > 100) {
            throw new Error("Invalid logo");
        }
    }

    public static from(value: string): DrivingSchoolLogo {
        const drivingSchoolLogo = new DrivingSchoolLogo(value);
        if (drivingSchoolLogo.isEmpty()) {
            throw new Error("Invalid logo");
        }
        return drivingSchoolLogo;
    }

    public isEmpty(): boolean {
        return this.value === null;
    }

    public static empty(): DrivingSchoolLogo {
        return new DrivingSchoolLogo(null);
    }
}
