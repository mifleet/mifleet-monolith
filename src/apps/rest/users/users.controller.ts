import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterAccountDTO } from 'src/core/fleetManagement/users/application/useCases/RegisterAccount/RegisterAccountDTO';
import { InMemoryOwnerRepository } from 'src/core/fleetManagement/users/infraestructure/InMemoryOwnerRepository';
import { MockUuidGenerator } from 'src/core/shared/infraestructure/MockUuidGenerator';

class OwnerSerializer {
    constructor(
        private readonly owner: Owner
    ) { }

    serialize() {
        return {
            id: this.owner.id,
            firstName: this.owner.firstName,
            lastName: this.owner.lastName,
            email: this.owner.email
        }
    }
}

@Controller('users')
export class UsersController {
    private readonly uuidGenerator = new MockUuidGenerator();

    private readonly ownerRepository = new InMemoryOwnerRepository();
    @Get()
    async getHello() {
        return "Hello world";
    }

    @Post("owner")
    async createOwner(@Body() request: RegisterAccountDTO) {
        const useCase = new RegisterAccountUseCase(this.ownerRepository, this.uuidGenerator);
        const result = await useCase.execute(request);
        if (result.isOk()) {
            const serializer = new OwnerSerializer(result.getValue());
            return serializer.serialize();
        }
        return result.getValue();
    }
}
