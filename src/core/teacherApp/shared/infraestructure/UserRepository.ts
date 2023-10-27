import { Repository } from "../../../../core/shared/infraestructure/Repository";
import { User } from "../domain/User";

export interface UserRepository extends Repository<User> {
    findByEmail(email : string) : Promise<User>;
    findByEmailAndPassword(email : string, password : string) : Promise<User>;
}

