import { AuthProvider } from "../application/adapters/AuthProvider";
import { Credential } from "../domain/model/Credential";
import { User } from "../domain/model/User";
import { UserRepository } from "../application/adapters/UserRepository";

export class InMemoryBearerTokenAuthProvider implements AuthProvider<{token : string}> {

    constructor(private readonly userRepository : UserRepository){
    }

    private readonly credentials : Record<string, string> = {
    }

    findUserFromCredentials(credentials: Credential<{ token: string; }>): Promise<User> {
        return this.userRepository.findUserByEmail(
            Object.keys(this.credentials).
                find(key => this.credentials[key] === credentials.value.token)
            )
    }

    findCredentials(email: string, password: string): Promise<Credential<{token : string}>> {
        return new Promise((resolve, reject) => {
            if(this.credentials[email]) resolve(Credential.create({token : this.credentials[email]}))
            reject("Credentials not found")
        })
    }

    createCredentials(user : User): Promise<Credential<{ token : string }>> {
        return new Promise((resolve, reject) => {
            const credentials = Credential.create({token : "abcdefg"})
            this.credentials[user.email] = Math.random().toString(36).substring(7);
            resolve(credentials)
        })
    }
}