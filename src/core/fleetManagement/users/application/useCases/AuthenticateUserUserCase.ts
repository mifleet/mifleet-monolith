import { AuthProvider } from "../adapters/AuthProvider";
import { UserRepository } from "../adapters/UserRepository";
import { Credential } from "../../domain/model/Credential";
import { Result } from "src/core/shared/utils/Result";

export class AuthenticateUserUseCase<T>{
    constructor(private readonly authProvider : AuthProvider<T>, private readonly userRepository : UserRepository){
    }

    async execute(credential: Credential<T>){
        const user = this.authProvider.findUserFromCredentials(credential)
        if(user) Result.ok(user);
        return Result.fail("User not found")
    }
}