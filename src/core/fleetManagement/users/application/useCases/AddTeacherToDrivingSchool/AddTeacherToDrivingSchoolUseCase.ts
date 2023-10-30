import { UuidGenerator } from "src/core/shared/application/adapters/UuidGenerator";
import { TeacherRepository } from "../../adapters/TeacherRepository";
import { AddTeacherToDrivingSchoolDTO } from "./AddTeacherToDrivingSchoolDTO";
import { Teacher } from "../../../domain/Teacher";

export class AddTeacherToDrivingSchoolUseCase{
    constructor(
        private readonly repository : TeacherRepository,
        private readonly uuidGenerator : UuidGenerator
    ){
    }

    public async execute(request : AddTeacherToDrivingSchoolDTO) : Promise<void>{
        const id  = await this.uuidGenerator.generate();
        const teacher = Teacher.from({
            id,
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            drivingSchoolSectionId: request.drivingSchoolSectionId
        });
        await this.repository.save(teacher);
    }
}
