import { User } from "../../domain/model/User";
import { Credential } from "../../domain/model/Credential";

export interface AuthProvider<T>{
    findCredentials(email : string, password : string) : Promise<Credential<T>>
    findUserFromCredentials(credentials : Credential<T>) : Promise<User>
    createCredentials(user : User) : Promise<Credential<T>>
}
