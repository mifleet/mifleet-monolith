import { Controller, Get } from '@nestjs/common';
import { CreateDrivingSchoolOnUserCreated } from 'src/core/fleetManagement/drivingSchools/application/subscribers/CreateDrivingSchoolOnUserCreated';
import { UserRegistrar } from 'src/core/fleetManagement/users/application/useCases/UserRegistrar';
import { UsersFetcher } from 'src/core/fleetManagement/users/application/useCases/UsersFetcher';
import { InMemoryUserRepository } from 'src/core/fleetManagement/users/infraestructure/InMemoryUserRepository';
import { InMemoryEventBus } from 'src/core/shared/infraestructure/InMemoryEventBus';
import { MockUuidGenerator } from 'src/core/shared/infraestructure/MockUuidGenerator';

@Controller('users')
export class DogsController {

    userRepository = new InMemoryUserRepository();
    uuidGenerator = new MockUuidGenerator();
    eventBus = new InMemoryEventBus([new CreateDrivingSchoolOnUserCreated()]);

    @Get('/')
    async getHello() {
        const useCase = new UsersFetcher(this.userRepository);
        const result = await useCase.fetchAll();
        if (result.isOk()) return result.getValue()
        return {
            error: result.getError(),
        };
    }

    @Get('/create')
    async create() {
        const useCase = new UserRegistrar(this.userRepository, this.eventBus, this.uuidGenerator);
        const result = await useCase.registrar("josericardopenase@gmail.com", "firstName", "lastName");
        if (result.isOk()) return result.getValue()
        return {
            error: result.getError(),
        };
    }
}
