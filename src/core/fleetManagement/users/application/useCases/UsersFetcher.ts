import { Result } from "src/core/shared/utils/Result";
import { User } from "../../domain/User";
import { UserRepository } from "../adapters/UserRepository";

export class UsersFetcher{

    constructor(
        private readonly userRepository : UserRepository
    ){}

    async fetchAll(): Promise<Result<User[], string[]>> {
        const users = await this.userRepository.findAll();
        return Result.ok(users);
    }
}
