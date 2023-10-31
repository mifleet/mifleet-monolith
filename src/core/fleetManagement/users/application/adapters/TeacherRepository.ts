import { Repository } from "src/core/shared/application/adapters/Repository";
import { Teacher } from "../../domain/model/Teacher";

export interface TeacherRepository extends Repository<Teacher> {
    findByEmail(email: string): Promise<Teacher>;
    findByEmailAndPassword(email: string, password: string): Promise<Teacher>;
    isTeacherRegistered(email: string): Promise<boolean>;
}

