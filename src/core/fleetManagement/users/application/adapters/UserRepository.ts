import { Repository } from "../../../../../core/shared/application/adapters/Repository";
import { User } from "../../domain/model/User";

export interface UserRepository extends Repository<User>{
    findUserByEmail(email : string) : Promise<User | undefined>
} 
