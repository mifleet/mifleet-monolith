import { UuidGenerator } from "src/core/shared/application/adapters/UuidGenerator";
import { TeacherRepository } from "../../adapters/TeacherRepository";
import { AddTeacherToDrivingSchoolDTO } from "./AddTeacherToDrivingSchoolDTO";
import { Result } from "src/core/shared/utils/Result";
import { Teacher } from "../../../domain/model/Teacher";

export class AddTeacherToDrivingSchoolUseCase{
    constructor(
        private readonly repository : TeacherRepository,
        private readonly uuidGenerator : UuidGenerator
    ){
    }

    public async execute(request : AddTeacherToDrivingSchoolDTO){
        const id  = await this.uuidGenerator.generate();
        const teacher = Teacher.from({
            id,
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            drivingSchoolSectionId: request.drivingSchoolSectionId
        });
        await this.repository.save(teacher);
        return Result.ok(teacher);
    }
}
