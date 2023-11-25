import { InMemoryRepository } from "../../../../core/shared/infraestructure/InMemoryRepository";
import { User } from "../domain/model/User";

export class InMemoryUserRepository extends InMemoryRepository<User>{
}