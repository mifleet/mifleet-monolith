import { Controller, Get } from '@nestjs/common';
import { UserRegistrar } from 'src/core/fleetManagement/users/application/useCases/UserRegistrar';
import { UsersFetcher } from 'src/core/fleetManagement/users/application/useCases/UsersFetcher';
import { InMemoryUserRepository } from 'src/core/fleetManagement/users/infraestructure/InMemoryUserRepository';
import { InMemoryEventBus } from 'src/core/shared/infraestructure/InMemoryEventBus';
import { MockUuidGenerator } from 'src/core/shared/infraestructure/MockUuidGenerator';

@Controller('users')
export class DogsController {

    userRepository = new InMemoryUserRepository();
    uuidGenerator = new MockUuidGenerator();
    eventBus = new InMemoryEventBus();

    @Get('/')
    async getHello() {
        const useCase = new UsersFetcher(this.userRepository);
        const users = await useCase.fetchAll();

        return {
            result: users,
        };
    }

    @Get('/create')
    async create(){
        const useCase = new UserRegistrar(this.userRepository, this.eventBus, this.uuidGenerator);
        await useCase.registrar("josericardopenase@gmail.com", "firstName", "lastName");

        return {
            result: "User created",
        };
    }
}
