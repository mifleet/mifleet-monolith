import { AuthProvider } from "../adapters/AuthProvider";
import { UserRepository } from "../adapters/UserRepository";
import { Credential } from "../../domain/model/Credential";
import { Result } from "../../../../shared/utils/Result";
import { User } from "../../domain/model/User";

export class AuthenticateUserUseCase{
    constructor(private readonly authProvider : AuthProvider<{token : string}>, private readonly userRepository : UserRepository){
    }

    async execute(credential: Credential<{token : string}>) : Promise<Result<User, string>>{
        try{
            const user = await this.authProvider.findUserFromCredentials(credential)
            if(!user) return Result.fail("User not found")
            return Result.ok(user);
        }catch(error){
            return Result.fail(error)
        }
    }
}