import { Repository } from "src/core/shared/application/adapters/Repository";
import { Owner } from "../../domain/Owner";

export interface OwnerRepository extends Repository<Owner> {
    findByEmail(email: string): Promise<Owner>;
    findByEmailAndPassword(email: string, password: string): Promise<Owner>;
    isOwnerRegistered(email: string): Promise<boolean>;
}

