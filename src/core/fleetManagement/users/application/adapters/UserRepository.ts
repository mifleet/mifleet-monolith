import { Repository } from "src/core/shared/application/adapters/Repository";
import { User } from "../../domain/User";

export interface UserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User>;
    findByEmailAndPassword(email: string, password: string): Promise<User>;
    isUserRegistered(email: string): Promise<boolean>;
}

