export interface DrivingSchoolSectionValidator {
    doesExist(section : number): Promise<boolean>;
    isPartOfDrivingSchool(section : number, drivingSchool: boolean): Promise<boolean>;
}
