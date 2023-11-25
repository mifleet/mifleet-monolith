import { InMemoryRepository } from "src/core/shared/infraestructure/InMemoryRepository";
import { OwnerRepository } from "../application/adapters/OwnerRepository";
import { Owner } from "../domain/model/Owner";

export class InMemoryOwnerRepository extends InMemoryRepository<Owner> implements OwnerRepository{
    findByEmail(email: string): Promise<Owner> {
        const owner = this.entities.find((owner) => {
            return owner.email === email;
        });
        return Promise.resolve(owner);
    }
    findByEmailAndPassword(email: string, password: string): Promise<Owner> {
        return null
    }
    isOwnerRegistered(email: string): Promise<boolean> {
        const owner = this.entities.find((owner) => {
            return owner.email === email;
        });

        return Promise.resolve(owner !== undefined);
    }
}
