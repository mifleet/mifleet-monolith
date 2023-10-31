import { Controller, Get } from '@nestjs/common';
import { CreateDrivingSchoolOnUserCreated } from 'src/core/fleetManagement/drivingSchools/application/subscribers/CreateDrivingSchoolOnUserCreated';
import { InMemoryTeacherRepository } from 'src/core/fleetManagement/users/infraestructure/InMemoryTeacherRepository';
import { InMemoryEventBus } from 'src/core/shared/infraestructure/InMemoryEventBus';
import { MockUuidGenerator } from 'src/core/shared/infraestructure/MockUuidGenerator';

@Controller('users')
export class DogsController {

    teacherRepository = new InMemoryTeacherRepository();
    uuidGenerator = new MockUuidGenerator();
    eventBus = new InMemoryEventBus([new CreateDrivingSchoolOnUserCreated()]);

    @Get('/')
    async getHello() {
    }

    @Get('/create')
    async create() {
    }
}
