import { User } from "../../domain/User";
import { UserRepository } from "../adapters/UserRepository";

export class UsersFetcher{

    constructor(
        private readonly userRepository : UserRepository
    ){}

    async fetchAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}
