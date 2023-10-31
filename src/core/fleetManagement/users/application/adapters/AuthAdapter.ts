import { User } from "../../domain/model/User";

export interface AuthAdapter{
    isAuthenticated() : boolean;
    getCurrentUser() : User;
}
