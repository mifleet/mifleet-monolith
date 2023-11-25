import { UuidGenerator } from "src/core/shared/application/adapters/UuidGenerator";
import { OwnerRepository } from "../../adapters/OwnerRepository";
import { RegisterAccountDTO } from "./RegisterAccountDTO";
import { Result } from "src/core/shared/utils/Result";
import { Owner } from "../../../domain/model/Owner";

export class RegisterAccountUseCase {
    constructor(
        private readonly ownerRepository: OwnerRepository,
        private readonly uuidGenerator: UuidGenerator
    ) {}

    public async execute(request: RegisterAccountDTO) {
        const uuid = await this.uuidGenerator.generate();
        const owner = Owner.from({ 
            id: uuid, 
            firstName: request.firstName, 
            lastName: request.lastName, 
            email: request.email 
        });
        await this.ownerRepository.save(owner);
        return Result.ok(owner);
    }
}
