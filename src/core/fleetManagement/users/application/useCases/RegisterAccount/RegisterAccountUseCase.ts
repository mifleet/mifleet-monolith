import { UuidGenerator } from "src/core/shared/application/adapters/UuidGenerator";
import { OwnerRepository } from "../../adapters/OwnerRepository";
import { RegisterAccountDTO } from "./RegisterAccountDTO";
import { Owner } from "../../../domain/Owner";

export class RegisterAccountUseCase {

    constructor(
        private readonly ownerRepository: OwnerRepository,
        private readonly uuidGenerator: UuidGenerator
    ) { }

    public async execute(request: RegisterAccountDTO): Promise<void> {
        const uuid = await this.uuidGenerator.generate();
        const owner = Owner.from({ 
            id: uuid, 
            firstName: request.ownerFirstName, 
            lastName: request.ownerLastName, 
            email: request.ownerEmail 
        });
        await this.ownerRepository.save(owner);
    }
}
