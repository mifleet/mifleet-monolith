import { Controller, Get } from '@nestjs/common';
import { CreateDrivingSchoolOnUserCreated } from 'src/core/fleetManagement/drivingSchools/application/subscribers/CreateDrivingSchoolOnUserCreated';
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
    }

    @Get('/create')
    async create() {
    }
}
