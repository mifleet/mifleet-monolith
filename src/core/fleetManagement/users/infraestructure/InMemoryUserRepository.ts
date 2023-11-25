import { InMemoryRepository } from "../../../../core/shared/infraestructure/InMemoryRepository";
import { UserRepository } from "../application/adapters/UserRepository";
import { User } from "../domain/model/User";

export class InMemoryUserRepository extends InMemoryRepository<User> implements UserRepository{
    findUserByEmail(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = this.entities.find(user => user.email === email)
            if(!user) reject("User not found")
            resolve(user)
            
        })
    }
}