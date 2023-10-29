import { User } from "../../domain/User";

export interface AuthAdapter{
    isAuthenticated() : boolean;
    getCurrentUser() : User;
}
