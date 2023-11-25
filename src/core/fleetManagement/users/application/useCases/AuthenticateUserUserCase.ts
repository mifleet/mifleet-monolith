import { AuthProvider } from "../adapters/AuthProvider";
import { UserRepository } from "../adapters/UserRepository";
import { Credential } from "../../domain/model/Credential";
import { User } from "../../domain/model/User";

export class AuthenticateUserUseCase<T>{
    constructor(private readonly authProvider : AuthProvider<T>, private readonly userRepository : UserRepository){
    }

    async execute(credential: Credential<{token : string}>) : Promise<User>{
        // Implement your logic here
        // ...
    }
}