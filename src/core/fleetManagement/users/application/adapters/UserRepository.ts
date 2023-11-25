import { Repository } from "src/core/shared/application/adapters/Repository";
import { User } from "../../domain/model/User";

export interface UserRepository extends Repository<User>{
} 